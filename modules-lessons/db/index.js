let phrases;

exports.connect = () => {
    phrases = require('./ua');
};

exports.getPhrase = (name) => {
    if (!phrases[name]) {
        throw new Error('No such phrase: ' + name + '!');
    }

    return phrases[name];
};