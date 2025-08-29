import http from "http"

const server  = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.end('<h1> Simo Hayha</h1><p>Loki podre</p>')
})

server.listen(2222)