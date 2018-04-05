const ExtractTextPlugin = require("extract-text-webpack-plugin");
const styles = new ExtractTextPlugin('styles.css');
exports.default = [styles];
module.exports = exports['default'];
