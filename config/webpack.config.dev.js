const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');

const paths = require('./paths').dev;
const devServer = require('./webpackDevServer.config.js');


module.exports = ( env, { mode: MODE } ) => ({
    mode: MODE || 'development',
    entry: paths.src,
    output: {
        publicPath: 'http://localhost:3000/',
        filename: 'static/js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: require.resolve('react-dev-utils/eslintFormatter'),
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.src,
            },
            {
                // ES6+ into vanilla ES5
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                include: paths.src,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    cacheCompression: true,
                    compact: true,
                    plugins: [
                        [
                            'babel-plugin-named-asset-import',
                            {
                                loaderMap: {
                                    svg: {
                                        ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                                    },
                                },
                            },
                        ],
                    ],
                },
            },
            {
                // Takes a imported file and emits the file into output
                exclude: [/\.(js|mjs|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/],
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader', // injects CSS into the DOM.
                    'css-loader', // takes imported css
                    {
                        //autoprefexer, polyfill
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    stage: 3,
                                }),
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // catches errors and shows it on page
        new ErrorOverlayPlugin(),
        // makes html file and manages sources within it
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.public + '/index.html',
            publicPath: '/',
        }),
    ],
    devtool: 'cheap-module-source-map', // generates source maps
    resolve: {
        modules: [ paths.src, 'node_modules' ],
        alias: {
            '@assets': path.resolve(paths.src, 'assets'),
            '@features': path.resolve(paths.src, 'features'),
            '@core': path.resolve(paths.src, 'core'),
            '@ui': path.resolve(paths.src, 'ui'),
            '@pages': path.resolve(paths.src, 'pages'),
            '@lib': path.resolve(paths.src, 'lib'),
        },
    },
    devServer: devServer({ MODE }),
});
