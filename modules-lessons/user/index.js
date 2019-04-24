let db = require('../db');
let log = require('../logger')(module);
db.connect();

class User {
    constructor(name) {
        this.name = name;
    }

    hello(who) {
        log(db.getPhrase('Hello') + ', ' + who.name + '!');
    }
}

module.exports = User;