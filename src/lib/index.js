const lodash = require('lodash');


const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
    const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');

    if (lodash.size(req(key)) > 1) {
        for(let submodule in req(key)) {
            module.exports[submodule] = req(key)[submodule];
        }
    } else {
        module.exports[componentName] = req(key)[componentName];
    }
});
