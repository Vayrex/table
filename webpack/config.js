const path = require('path');
const {plugins, rules} = require('./resources');

const config = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    'main': ['./src/main.ts'],
    "polyfills": ["./src/polyfills.ts"]
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), 'dist')
  },
  module: {
    rules: rules
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8000,
    clientLogLevel: "none",
    historyApiFallback: true,
    index: 'index.html',
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 1500,
      poll: 1500
    }
  },
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  }
};

module.exports = config;
