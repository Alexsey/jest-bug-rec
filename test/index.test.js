'use strict'

const rec = require('../src')

test('', () => {
  const inner = 'inner'
  const outer = rec({inner})

  expect(outer.inner).toEqual('inner')
})