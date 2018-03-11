
const express = require('express')
const server = express()

server.get('/', (request, response) => {
  response.send('hello.')
})

server.listen(3000, () => console.log('ready'))
