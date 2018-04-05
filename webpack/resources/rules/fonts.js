const rules = [
    {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        use: {
            loader:'file-loader',
            options:{
                name:'fonts/[name].[ext]'
            }
        }
    }
];

exports.default = rules;
module.exports = exports['default'];