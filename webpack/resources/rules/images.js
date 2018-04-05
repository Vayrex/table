const rules = [
    {
        test: /\.(gif|jpeg|jpg|png)$/,
        use: [
            {
                loader: 'url-loader',
                options:{
                    limit: 10000,
                    fallback:'file-loader',
                    name:'images/[name].[ext]'
                }
            }
        ]
    }
];

exports.default = rules;
module.exports = exports['default'];