
// "this"
// concise syntax - parens, returns

function doIt(cb) {
  setTimeout(() => cb('hi!'), 500)
}

function something() {
  const self = this
  this.foo = 'bar'
  doIt(function() {
    console.log(self.foo)
  })
}

something()

//(function() {
//})()
