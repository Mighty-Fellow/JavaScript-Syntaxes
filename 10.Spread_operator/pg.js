// spead operator are create exact copy of main variable , let see

// var number = [1,2,3,4,5]

// var number2 = number;
//**  Description : here number is a reference that's why if we change any variable value,they change the another variable, where we use this number as a reference,if we ignore this process we use spread operator. */

// number2.push(6)

// console.log(number); // output [1,2,3,4,5,6]

// spread operator 👇👇
var number = [1,2,3,4,5]

var number2 = [...number]; // exact copy of main variable, if we change any variable it doesn't impact another variable.

number2.push(6)

console.log(number); // output [1,2,3,4,5]