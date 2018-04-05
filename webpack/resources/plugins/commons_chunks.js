const webpack = require('webpack');
const plugin = new webpack.optimize.CommonsChunkPlugin({
    names:['app','vendors']
});

exports.default = [plugin];
module.exports = exports['default'];