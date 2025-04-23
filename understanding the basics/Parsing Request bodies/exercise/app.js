const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Exercise</title></head>");
        res.write("<body>");
        res.write("<p>Hello, welcome to my exercise</p>");
        res.write("<form action='/create-user' method='POST'>username: <input name='username' type = 'text'><button type='submit'>Submit</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>users</title></head>");
        res.write("<body>");
        res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/create-user") {
        const data = [];
        
        req.on("data", chunk => {
            data.push(chunk);
        });
        req.on("end", () => {
            const message = Buffer.concat(data).toString();
            console.log(message.split("=")[1]);
        });

        res.writeHead(302, {"location": "/"});
        res.end();
    }
});

server.listen(4000);