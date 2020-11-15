var number = [1,2,3]

var result = number.findIndex((currentValue , index, array) =>{
return currentValue> 5
});
console.log(result)