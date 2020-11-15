class Student {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exampleFunction() {
        let array = [1,2,3];
        array.find(function(){
            this.test();
        },this) // if we don't pass this keyword, find method doesn't find another test function  
    }
}

let student = new Student("sumit" , 21)
student.exampleFunction();


// same thinks in arrow function 👇👇

class Student {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exampleFunction() {
        let array = [1,2,3];
        array.find(()=>{
            this.test();
        })
    }
}

let student = new Student("sumit" , 21)
student.exampleFunction();