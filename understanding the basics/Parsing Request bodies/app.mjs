import { createServer } from "node:http"
import { writeFileSync } from "node:fs"

createServer((req, res) => {
    const method = req.method
    if (req.url === "/") {
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<html>")
        res.write("<head><title>My first node server</title></head>")
        res.write("<body><form action = '/message' method = 'POST'><input type = 'text' name = 'message'></input><button type = 'submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end()
    }

    if (req.url === "/messages" && method === "POST") {
        const body = [];
        req.on("data", chunk => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end", () => {
            let parsedBody = Buffer.concat(body).toString()
            let message = parsedBody.split("=")[1]
            writeFileSync("messages.txt", message)
        })
        res.writeHead(302, {"location": "/"}) //this should cause the page to redirect
        return res.end
    }
}).listen(3000)




            
            
                
                
                    
                    
                
            
        