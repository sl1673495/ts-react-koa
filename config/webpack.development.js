const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {join} = require('path')

const webpackConfig = {
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    hot: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}
module.exports = webpackConfig