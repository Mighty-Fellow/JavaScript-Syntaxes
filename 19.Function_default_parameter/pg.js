// Function default parameter

function myFunc(x){
    return x
}

console.log(myFunc()) // Output : undefined 

function myFunc(x = 5){
    return x
}

console.log(myFunc()) // Output : 5 

function myFunc(x = 5){
    return x
}

console.log(myFunc(10)) // Output : 10

function myFunc(x = 5){
    return x
}

console.log(myFunc(null)) // Output : null