const webpack = require('webpack');
const plugin = new webpack.NoEmitOnErrorsPlugin();

exports.default = [plugin];
module.exports = exports['default'];