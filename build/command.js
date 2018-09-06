var yargs = require('yargs') // 参数工具类
var argv = null
if (!argv) {
  argv = yargs.usage('Usage: $0 <command> [options]') // 设置命令格式
  .describe('project', 'Project name')
  .boolean('mock')
  .boolean('https')
  .boolean('alignment')
  .alias('h', 'help')
  .alias('m', 'mock')
  .alias('al', 'alignment')
  .alias('p', 'path')
    .argv
}
module.exports = argv
