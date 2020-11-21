// array prototype map()

var number = [1,2,3,4,5]

var result = number.map((num)=>{
    // map method create a new array and they doesn't change the main array.
    return 2 * num;
})

console.log(number);
console.log(result);
