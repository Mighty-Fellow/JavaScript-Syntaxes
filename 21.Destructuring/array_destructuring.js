// Array Destructuring

const myArray = [1,2,3,4,5,6,7,8,9]

const m = myArray[4] // Without Destructuring
console.log(m) // Output: 5



const [a,b] = myArray // With Destructuring
console.log(a,b) // Output : 1 2
// Ops if i need 4 and 9 value in that time, so what can we do?😁😊😊 don't be panic.



const [,,,x,,,,,y] = myArray // we just skip this value which we do not need 🤞👍
console.log(x,y) // Output : 4 9


// Nasted Array
const nastedArray = [1,2,[3,10,20],7,8,9]
const [,n2,[,an3,an4],,,n9] = nastedArray
console.log(n2,an3,an4,n9) // Output : 2 10 20 9