
(function() {
  let foo = immutable.create({ beep: 'boop' })
  Object.freeze({ beep: 'boop' })
  foo = { beep : "bang" } // good!
  foo.beep = { beep : "bang" } // bad
  const num = 5
  console.log(foo)
})()
