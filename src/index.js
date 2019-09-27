'use strict'

module.exports = rec

function rec (p) {
  return new Proxy(p, {
    get: (obj, prop) => {
      return rec(obj)
    }
  })
}