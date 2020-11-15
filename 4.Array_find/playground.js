// Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var result = numbers.find(function(currentValue) {
    return currentValue > 4;
})

console.log(result); // find the 1st element which is greater than 4