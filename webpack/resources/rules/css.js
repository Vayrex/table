const path = require('path');
const styles = require('../plugins/extract_text')[0];

const rules = [
  {
    include: [path.join(process.cwd(), 'src', 'styles.scss')],
    test: /\.s?css|\.sass$/,
    use: styles.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            import: true,
            importLoaders: 2,
            sourceMap: true
          }
        },
        {
          loader: 'resolve-url-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })
  },
  {
    exclude: [path.join(process.cwd(), 'src', 'styles.scss')],
    test: /\.s?css|\.sass$/,
    use: [
      {
        loader: "raw-loader"
      },
      {
        loader: 'css-loader',
        options: {
          import: true,
          importLoaders: 2,
          sourceMap: true
        }
      },
      {
        loader: 'resolve-url-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }
];

exports.default = rules;
module.exports = exports['default'];
