const {createServer} = require('http');
const fs = require('fs');

const server = createServer((req, res) => {
    fs.readFile('index.html','utf8', (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('Internal Server Error');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

server.listen(3000, () => {
    console.log('Server is running on 3000');
});