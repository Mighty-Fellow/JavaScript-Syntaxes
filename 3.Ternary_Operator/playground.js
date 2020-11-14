// Ternary Operator

var age = 11

// var type ; 
// if(age>=18){
//     type = "adult";
// }else{
//     type = "child"
// }

// Ternary Operator 👇
// var type = (age>= 18) ? "adult" : "child"

var type = (age>= 18) ? "Adult" 
                      : (age<10)
                      ? "Child"
                      : "Young"
console.log(type)