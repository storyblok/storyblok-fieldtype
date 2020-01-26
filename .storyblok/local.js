const http = require('http')
const fs = require('fs')
 
const server = http.createServer((req, res) => {
  fs.readFile(`.storyblok/local.html`, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end("404 Not Found")
    }  
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

server.listen(4040, () => {
  console.log('Running at http://localhost:4040/')
})