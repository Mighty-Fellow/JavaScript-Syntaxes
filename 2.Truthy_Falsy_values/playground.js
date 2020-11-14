// Truthy / Falsy values

// if any value blank (" ") it is falysy value

// if exclusively doesn't false or zero or blank/empty string or null or undefined or not a number then it will be truthy otherwise it will be falsy .  
// falsy => false , 0 , "" , null , undefined , NaN.

// falsy value
var myVar = " ";
if(myVar){
    console.log("i'm truthy");
}else {
    console.log("I'm falsy"); // output
}

// Truthy
var myVar = "test";
if(myVar){
    console.log("i'm truthy"); // output
}else {
    console.log("I'm falsy");
}