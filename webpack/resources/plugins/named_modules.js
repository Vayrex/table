const webpack = require('webpack');
const plugin = new webpack.NamedModulesPlugin();

exports.default = [plugin];
module.exports = exports['default'];