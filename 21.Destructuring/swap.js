var a = 10
var b = 20

// Old way for swapping
var temp = a
a = b 
b = temp
console.log(a,b)


// New Way for swapping
var [b,a] = [a,b]
console.log(a,b)