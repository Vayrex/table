const webpack = require('webpack');
const plugin = new webpack.optimize.CommonsChunkPlugin({
    names:['main','polyfills']
});

exports.default = [plugin];
module.exports = exports['default'];
