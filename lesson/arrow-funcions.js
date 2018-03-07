
// "this"
// concise syntax - parens, returns

function doIt(cb) {
  setTimeout(cb, 500)
}

(function() {
  this.foo = 'bar'
  doIt(function () => {
    console.log(this.foo)
  })
})()
