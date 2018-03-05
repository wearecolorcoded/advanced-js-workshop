
const https = require('https')
const agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'

module.exports = (username, callback) => {
  const options = {
    hostname: 'api.github.com',
    path: `/users/${username}`,
    headers: { 'User-Agent': agent }
  }

  https.get(options, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', chunk => {
      data += chunk
    })

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const result = JSON.parse(data)
      callback(null, result)
    })

  }).on('error', err => callback(err))

}
