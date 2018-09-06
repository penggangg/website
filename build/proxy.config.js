
var config = require('../config')
var path = require('path')
module.exports = function (mock, targets) {
  var proxy = ""
  var target = 'http://localhost:3001'
  if (mock) {
    proxy = {
      '**': {
        target: target,
        changeOrigin: true, // 是否跨域
        // pathRewrite: {"^/api" : ""} //请求 /api/home/index  就会变成 localhost:3000/home/index
        pathRewrite: function (path, req) {
          return '/userInfo'
        }
      }
    }
  } else {
    proxy = {
        '/api': {
        target: targets,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
  return {
    stats: {colors: true},
    hot: true,
    inline: true,
    proxy: proxy,
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
      ],
    },
    clientLogLevel: 'warning',
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  }
}
