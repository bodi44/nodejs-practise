const http = require('http');

//http.Server -> net.Server -> EventEmitter

const server = new http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;

const emit = server.emit;

server.emit = (event) => {
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', (req, res) => {
    res.end(`Hello, world! ${counter++}`);
});