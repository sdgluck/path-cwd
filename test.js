const path = require('path')
const cwd = require('./')

describe('path-cwd', () => {
  it('throws with bad path', () => {
    expect(() => cwd(0)).toThrowError(/expecting path to be string/i)
  })

  it('gets cwd', () => {
    expect(cwd()).toEqual(process.cwd())
  })

  it('gets path within cwd', () => {
    expect(cwd('spongebob')).toEqual(process.cwd() + path.sep + 'spongebob')
  })
})
