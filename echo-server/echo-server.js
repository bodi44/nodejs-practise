// http:127.0.0.1:1337/echo?message=Hello -> Hello

const http = require('http');
const url = require('url');

const server = new http.Server((req, res) => {
    console.log(req.headers);
    const urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.setHeader('Cache-control', 'no-cache');
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404; // Not Found
        res.end('Page no found');
    }
});

server.listen(1337, '127.0.0.1');