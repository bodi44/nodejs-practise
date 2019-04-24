const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, info) => { // callback
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('Server error occurred');
                return;
            }
            res.end(info);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
}).listen(3000);