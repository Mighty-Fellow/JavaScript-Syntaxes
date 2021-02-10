// Object Destructuring 

const User = {
    id:1,
    name:'Raton',
    age:20,
}

// const name = User["name"] // both same
// const name = User.name // both same
// console.log(user); // Output : Raton

const {name} = User 
const {name: title} = User // if i store value in another name i simply use alies like const {name:title} = User
console.log(name); // Output : Raton
console.log(title);


// Nasted Function
const User1 = {
    id:1,
    name:'Raton',
    age:20,
    education:{
        degree: 'English',
        address:{
            homeAddress: 'Nayergaon'
        }
    }
}

const {education : {degree}= {}} = User1 // With Destructuring and if there is no education object we set default values equal with another object that means app doesn't crush , we just found undefine.
const {education : {degree : x}} = User1 // With Destructuring
const {education : {address :{homeAddress}}} = User1 // With Destructuring

const address = User1.education.address.homeAddress // Without Destructuring

console.log(degree) // Output: English
console.log(x) // Output: English

console.log(homeAddress) // Output: Nayergaon
console.log(address) // Output: Nayergaon