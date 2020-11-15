var number = [1, 2, 3, 4, 5, 6, 7, 8]

var result = number.slice(1,2,10,20,30,40,50) // in this method 1st two value 1st one where we slice and 2nd how many numbers we remove than add new numbers

console.log(result) // output [2,3]

// this method change the whole array.
console.log(number) // output [1,10,20,30,40,50,4,5,6,7,8]