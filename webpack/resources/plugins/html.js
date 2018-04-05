var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugin = new HtmlWebpackPlugin({
    filename:'index.html',
    template:'./src/index.html',
    xhtml:true,
    inject: true
});

exports.default = [plugin];
module.exports = exports['default'];