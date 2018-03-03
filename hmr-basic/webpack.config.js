const webpack = require('webpack')

module.exports = {
  devServer: {
    hot: true,
    overlay: true,
    port: 5000,
    publicPath: '/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
