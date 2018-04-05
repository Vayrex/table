let path = require('path');

const rules = [
    {
        test: /\.ts$/,
        use: {
            loader:'@ngtools/webpack',
            options:{
              tsConfigPath: path.join(process.cwd(),'src','tsconfig.app.json')
            }
        }
    }
];

exports.default = rules;
module.exports = exports['default'];
