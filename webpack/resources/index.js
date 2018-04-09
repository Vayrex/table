//plugins ///////////////////////////////////////////////////////////////////////////////////////////
var plugins = [];

//no emit on errors
plugins = plugins.concat(require('./plugins/no_emit_on_errors'));
//clean
plugins = plugins.concat(require('./plugins/clean'));
//progress
plugins = plugins.concat(require('./plugins/progress'));
// circular dependency
plugins = plugins.concat(require('./plugins/circular_dependecy'));
// named modules
plugins = plugins.concat(require('./plugins/named_modules'));
//extract text plugin
plugins = plugins.concat(require('./plugins/extract_text'));
//html plugin
plugins = plugins.concat(require('./plugins/html'));
//commons chunks
plugins = plugins.concat(require('./plugins/commons_chunks'));
//angular-ui
plugins = plugins.concat(require('./plugins/angular_compiler'));

// rules /////////////////////////////////////////////////////////////////////////////////////////////
var rules = [];
// css/sass
rules = rules.concat(require('./rules/css'));
// fonts
rules = rules.concat(require('./rules/fonts'));
// images
rules = rules.concat(require('./rules/images'));
//ts
rules = rules.concat(require('./rules/ts'));
//html
rules = rules.concat(require('./rules/html'));

module.exports = {
  plugins:plugins,
  rules:rules
};
