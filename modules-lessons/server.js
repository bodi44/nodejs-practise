const log = require('./logger')(module);
const db = require('./db');
const User = require('./user');

const run = () => {
    let vasyl = new User('Vasyl');
    let petro = new User('Petro');

    vasyl.hello(petro);

    log(db.getPhrase('Run Successful'));
};

if (module.parent)
    exports.run = run;
else run();