const paths = require('./paths').dev;
const env = require('./env');

const HOST = env.HOST || 'localhost';
const PORT = env.PORT || 3000;


// webpac-dev-server
module.exports = ({ MODE }) => {
    return {
        contentBase: paths.public,
        host: HOST,
        port: PORT,
        sockHost: HOST,
        sockPort: PORT,
        inline: true,
        liveReload: true,
        quiet: true,
        historyApiFallback: true,
        proxy: !env.PROXY ? undefined : {
            '/api': {
                target: env.PROXY,
                secure: false,
                changeOrigin: true,
            },
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }
}
