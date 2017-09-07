const resolve = require('path').resolve

module.exports = function pathCwd (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  return resolve(process.cwd(), path)
}
