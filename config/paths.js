const resolvePath = require('./utils/resolvePath');


module.exports = {
    dev: {
        src: resolvePath('../src/'),
        public: resolvePath('../public/'),
        build: resolvePath('../build/'),
        env: resolvePath('../.env'),
    },
    prod: {
        src: resolvePath('./../src/'),
        public: resolvePath('./../public/'),
        build: resolvePath('./../build/'),
        env: resolvePath('./../.env'),
    },
};
