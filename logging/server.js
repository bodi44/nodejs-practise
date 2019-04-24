const http = require('http');
const server = http.createServer();
const debug = require('debug')('server');


server.on('request', require('./request'));
server.listen(1337);

debug('Server is running');