var inquirer = require('inquirer')
var jetpack = require('fs-jetpack')
var yargs = require('yargs')
var _ = require('lodash')
var spawn = require('child_process').spawn
var historyPath = './build/ask.json'

if (!jetpack.exists(historyPath)) {
  jetpack.file(historyPath, {
    content: {
      project: 0,
      mock: true,
      alignment: false,
      address: "",
      buildSourceMap: false
    }
  })
}
var history = jetpack.read(historyPath, 'json')


var mapHost = jetpack.read('./build/host-map.json', 'json')
var list = []
for(const i in mapHost){
  list.push({
    name: i,
    value: mapHost[i]
  })
}
console.log(list)
argv = yargs.usage('Usage: $0 <command> [options]')
.boolean('dev')
.boolean('build')
  .argv

var questions = []
if (argv.dev) {
  questions.push({
    type: 'confirm',
    name: 'mock',
    message: '是否启动mock环境 ? '
  },{
    when: function(response){
      return !response.mock
    },
    type: 'confirm',
    name: 'alignment',
    message: '是否启动真实环境 ？'
  },{
    when: function(response){
      if(!response.alignment && !response.mock) {
        console.log('你不选择mock 也选择真实环境。你要闹那样？自动启动mock环境')
      }
      return response.alignment
    },
    type: 'list',
    name: 'address',
    default: history.address || 0,
    message: '选一个真实环境的地址',
    choices: list
  })
} else if (argv.build) {}

inquirer.prompt(questions).then(function (answers) {
  var command
  if (argv.dev) {
    command = 'npm run _dev --'
  } else if (argv.build) {
  }
  if (argv.dev) {
     if (answers.mock) {
      command += ' --mock'
    }
    if (answers.alignment) {
      command += ' --alignment'
      var path = answers.address
      command += ' --path ' + path
    }
  } else {
  }
  // write back answers to history
  history = _.assign(history, answers)
  jetpack.writeAsync(historyPath, history).then(() => {}, (err) => {console.log(err)})

  // preserve color when executing child_process.spawn
  // reference to http://stackoverflow.com/questions/7725809/preserve-color-when-executing-child-process-spawn
  var cmd = ''
  console.log(command)
  if (/^win/.test(process.platform)) {
    cmd = spawn('cmd', ['/s', '/c', command], { stdio: 'inherit' });
  } else {
    cmd = spawn('/bin/sh', ['-c', command], { stdio: 'inherit' })
  }
  cmd.stdout.on('data', function (data) {
    console.log(data)
    process.stdout.write(data)
  })

  cmd.stderr.on('data', function (data) {
    process.stderr.write(data)
  })

  cmd.on('exit', function (code) {
    console.log(code)
  })
}, function (err) {
  console.log(err)
}).catch(() => {})
