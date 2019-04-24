const winston = require('winston');

module.exports = module => makeLogger(module.filename);

function makeLogger(path) {
    if (path.match(/request.js$/)) {
        let transports = [
            new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: 'info'
            }),

            new winston.transports.File({
                filename: 'debug.log',
                level: 'debug'
            })
        ];

        return new winston.createLogger({
            transports: transports
        })
    } else {
        return new winston.createLogger({
            transports: []
        })
    }
}