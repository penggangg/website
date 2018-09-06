var nodemon = require('nodemon')
nodemon({
  script: './mock/server.js',
  ext: 'js json',
  watch: ['mock/'],
  ignore: ['./mock/index.js', './mock/server.js']
})

nodemon.on('start', function () {
  console.log('Mock server is running... 🚀')
}).on('quit', function () {
  console.log('>_ Mock server is quit')
}).on('restart', function (files) {
  console.log('Mock server restarted due to: ' + files)
})
