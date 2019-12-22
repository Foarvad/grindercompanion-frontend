const fs = require('fs');

const paths = require('./paths').dev;


// parses env variables from .env
module.exports = (() => {
    try {
        return fs.readFileSync(paths.env, 'utf8')
            .trim()
            .split('\n')
            .reduce((obj, el) => {
                const splittedVar = el.split('=');

                if(splittedVar[1] && splittedVar[0] === splittedVar[0].toUpperCase())
                    obj[splittedVar[0]] = splittedVar[1];
                    return obj;
            }, {});
    } catch(err) {
        return {};
    }
})();
