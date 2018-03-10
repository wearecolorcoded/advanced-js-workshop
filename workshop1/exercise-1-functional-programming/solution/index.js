
// require the file system module so we can read files
const fs = require('fs')
// read the json file, and parse it so that we can use it like
// a regular JavaScript object
const all_people = JSON.parse(fs.readFileSync('../../people.json'))
const people = all_people
  // filter out anyone who is not active
  .filter(p => p.isActive === true)
  // give everyone a $1,000,000
  .map(p => {
    p.balance = '$1,000,000'
    return p
  })
  // print the name and balance of everyone left in the array
  .forEach(p => console.log(`${p.name} has ${p.balance}`))
