const _path = require('path')

module.exports = function pathCwd (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  return _path.resolve(process.cwd(), path)
}
