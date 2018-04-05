const CircularDependencyPlugin = require('circular-dependency-plugin');
const plugin =  new CircularDependencyPlugin({
    // exclude detection of files based on a RegExp
    exclude: /a\.js|node_modules/,
    // add errors to webpack instead of warnings
    failOnError: true,
    // set the current working directory for displaying module paths
    cwd: process.cwd(),
});

exports.default = [plugin];
module.exports = exports['default'];