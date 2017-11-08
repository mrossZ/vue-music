import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  /*
    Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。
  */
  return new Promise((resolve, reject) => { /* new Promise( function(resolve, reject) {...}) */
    originJSONP(url, option, (err, data) => { /* originJSONP(url, option, function(err, data) {...}) */
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
