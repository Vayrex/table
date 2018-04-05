let path = require('path');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

let plugin =  new AngularCompilerPlugin({
  "mainPath": "main.ts",
  "platform": 0,
  "hostReplacementPaths": {
    "environments/environment.ts": "environments/environment.ts"
  },
  "sourceMap": true,
  "tsConfigPath":  path.join(process.cwd(),'src','tsconfig.app.json'),
  "skipCodeGeneration": true,
  "compilerOptions": {}
});

exports.default = [plugin];
module.exports = exports['default'];
