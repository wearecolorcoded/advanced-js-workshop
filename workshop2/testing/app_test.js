
const test = require('tape')
const app = require('./app')

test('adds_numbers', t => {
  const sum = app.add_numbers(1, 2)
  t.equal(3, sum)
  t.end()
})

test('adds numbers later', async t => {
  const sum = await app.add_numbers_async(1, 2)
  t.equal(3, sum)
  t.end()
})
