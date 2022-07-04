// Creating a server Web-page
const http = require('http');
const url = require('url');
// req=> Requesting the Server
// res => Responding back
// Server
// need to save server

const Server = http.createServer((req, res) => { // http.createServer Created a Server
    // res.end('hello This text is from Server!'); // Responding Through Server
    console.log(req.url);
    // console.log(req)
    //((req, res) => 
    // {res.end('hello This text is from Server!') call back Function

})

Server.listen(4000, '127.0.0.1', () => {
    console.log('Requesting From the Port 4000');
})