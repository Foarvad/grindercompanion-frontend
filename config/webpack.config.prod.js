const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SafePostCssParser = require('postcss-safe-parser');
const path = require('path');

const paths = require('./paths').prod;


module.exports = (env, { mode: MODE }) => ({
    mode: MODE || 'production',
    devtool: 'cheap-module-source-map',
    entry: ['@babel/polyfill', paths.src],
    output: {
        filename: 'static/js/bundle.[hash:8].js',
        publicPath: '/',
        path: paths.build,
    },
    module: {
        rules: [
            {
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
                exclude: [/\.(js|mjs|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/],
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            filename: '[name].[hash:8].[ext]',
                        },
                    },
                    'css-loader',
                    {
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
        // removes output directory before every build
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.public + '/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        // generates css files based on imported css in js files
        new MiniCssExtractPlugin({
            filename: '/static/css/[name].[hash:8].css',
            chunkFilename: '/static/css/[name].[hash:8].chunk.css',
        }),
        // clones files from selected directory to build directory
        new CopyWebpackPlugin([{
            from: paths.public,
        }]),
    ],
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
    optimization: {
        minimize: true,
        minimizer: [
            // minifies css
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    parser: SafePostCssParser,
                },
            }),
            // minifies js
            new TerserPlugin({
                cache: true,
            }),
        ],
    },
});
