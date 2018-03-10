
exports.add_numbers = (num1, num2) => num1 + num2

exports.add_numbers_async = (num1, num2, callback) => {
  const sum = num1 + num2
  setTimeout(() => callback(null, sum), 0)
}

exports.add_numbers_promisly = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const sum = num1 + num2
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      reject(new Error('Either num1 or num2 is not a valid number!'))
    } else {
      resolve(sum)
    }
  })
}
