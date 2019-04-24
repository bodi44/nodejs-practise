module.exports = (module) =>
    (/*...*/) => {
        const args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    }
;