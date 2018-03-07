
// foo(...arg1, arg2) // <== spread
// function(...things) // <== rest

function printArray(...items) {
  console.log(items)
}


// what's the output?
printArray(['foo', 'bar'])

