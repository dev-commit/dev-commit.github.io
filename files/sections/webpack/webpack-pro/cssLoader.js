module.exports = {
    loader: 'css-loader',
    options: {
        importLoaders: 1,
        modules: true,
        minimize: true,
        sourceMap: true,
        localIdentName: '[local]_[hash:base64:4]',
    },
};
