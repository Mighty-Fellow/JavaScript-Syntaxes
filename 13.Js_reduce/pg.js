// array prototype.reduce()

var number = [1,2,3,4,5]

var result = number.reduce((Prevalue,CurrentValue) =>{
    // One of the greatest method .
    // they return previous and currentValue and when i call this method we also add another parameter to initial the previous value because 1 is 
    // current value there is no previous value so we found previous value is undefined that's why we need to add another parameter.
    return Prevalue + CurrentValue ;

},10)

console.log(result);