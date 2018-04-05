const CleanWebpackPlugin = require('clean-webpack-plugin');

var plugin = new CleanWebpackPlugin(
    [
        'dist/*.*',
        'dist/fonts',
        'dist/images'
    ],
    {
        root: process.cwd()
    }
);

exports.default = [plugin];
module.exports = exports['default'];