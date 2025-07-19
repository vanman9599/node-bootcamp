const http = require('http');

const port = 5000;
const server = http.createServer((req, res)=>{
  console.log(req)
  if(req.url === '/'){
    res.end("Wecome to our home page")
    return
  }
  if(req.url === '/about'){
     res.end('His is our short history')
     return
  }
  res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for </p><a href="/">back home</a>`)
})

server.listen(port, ()=>{
 console.log(`Server listening on port ${port}`)
}
)