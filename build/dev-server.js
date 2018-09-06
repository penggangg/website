
var argv = require('./command')
var alignment = argv.alignment
var requestPath = argv.path
console.log('alignment '+ alignment)
console.log('requestPath '+ requestPath)
var devConfig = require('./webpack.dev.conf.js')
var proxyConfig = require('./proxy.config')
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var ip = require('ip')

var proxy = ""
process.traceDeprecation = true
process.noDeprecation = true
var opn = require('opn')
var compiler = webpack(devConfig);
if (alignment) {
  if(!requestPath) {
    return false
  }
  proxy = proxyConfig(false, requestPath)
} else {
  require('../mock')
  proxy = proxyConfig(true)
}

var server = new WebpackDevServer(compiler, proxy)
console.log(ip.address())
server.listen(proxy.port, proxy.host, function() {
  "use strict";
  opn('http://'+ip.address() + ":" +proxy.port)
  // opn('http://'+ip.address() + ":" +proxy.port, {app: ['google chrome', '--incognito']});
});
