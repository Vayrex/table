const rules = [
  {
    test: /\.html$/,
    use: [
      {
        loader: "raw-loader"
      }
    ]
  }
];

exports.default = rules;
module.exports = exports['default'];
