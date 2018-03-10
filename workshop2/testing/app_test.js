
const test = require('tape')
const app = require('./app')

test.only('adds numbers using async await', async t => {
  const expected_sum = 3
  let sum
  try {
    sum = await app.add_numbers_promisly('1', 2)
  } catch(err) {
    console.error('oops!')
    t.pass()
  }
  t.end()
})

test('adds numbers promisly', t => {
  const expected_sum = 3
  app.add_numbers_promisly(1, 2)
    .then(result => {
      t.is(result, expected_sum)
      t.end()
    })
    .catch(err => {
      console.error(err)
      t.fail()
    })
})

test('adds numbers asyncly', t => {
  const expected_sum = 3
  app.add_numbers_async(1, 2, (err, result) => {
    t.is(typeof expected_sum, 'number')
    t.is(result, expected_sum, 'sum is equal to 3')
    t.end()
  })
})

test('ensure add_numbers adds numbers', t => {
  const sum = app.add_numbers(1, 2)
  t.is(typeof sum, 'number')
  t.is(3, sum, 'sum is equal to 3')
  t.end()
})

test('ensure we get garbage', t => {
  const sum = app.add_numbers('1', 2)
  if (typeof sum !== 'number') {
    t.pass()
  } else {
    t.fail()
  }
  t.end()
})
