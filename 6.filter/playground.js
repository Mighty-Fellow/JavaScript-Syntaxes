var number  = [1,2,3,4,5,6,7,8,9,10,11,12];
var result = number.filter((currentValue, index,array)=>{
    return currentValue > 7
})
console.log(result); // output [8,9,10,11,12]