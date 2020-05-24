const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const cssLoader = require('./cssLoader');
const postcssLoader = require('./postcssLoader');
const { SCRIPTS_DIR_NAME, PUBLIC_PATH } = require('./constants');

const dev = merge(
    baseConfig,
    {
        mode: 'development',
        output: {
            filename: `${SCRIPTS_DIR_NAME}/[name].bundle.js`,
            chunkFilename: `${SCRIPTS_DIR_NAME}/[name].bundle.js`,
        },
        devServer: {
            port: process.env.PORT,
            contentBase: PUBLIC_PATH,
            inline: true,
            historyApiFallback: true,
        },
        devtool: false,
    },
);

dev.module.rules.push({
    test: /\.css$/,
    use: [
        'style-loader',
        cssLoader,
        postcssLoader,
    ],
});

dev.plugins.push(...[
    new webpack.SourceMapDevToolPlugin({
        filename: `${SCRIPTS_DIR_NAME}/[name].js.map`,
        columns: false,
    }),
]);

module.exports = dev;
