
const fs = require('fs')
const all_people = JSON.parse(fs.readFileSync('../../people.json'))
const people = all_people
  .filter(p => p.isActive === true)
  .map(p => {
    p.balance = '$1,000,000'
    return p
  })
  .forEach(p => console.log(`${p.name} has ${p.balance}`))
