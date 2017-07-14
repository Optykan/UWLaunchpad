'use strict'

const f = require('node-fetch')

class Net {
  static fetch (url, params) {
    var urlencoded = ''
    for (var i in params) {
      urlencoded += '&' + i + '=' + params[i] // in the format &[key]=[value]
    }

    urlencoded = '?' + urlencoded.substring(1)

    console.log(url+urlencoded)

    return f(url + urlencoded).then(result => {
      return result.json()
    }).then(json => {
      return new Promise((resolve, reject) => {
        resolve(json)
      })
    }).catch(e => {
      console.error(e)
    })
  }
}

module.exports = Net