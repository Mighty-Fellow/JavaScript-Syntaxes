const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thank");


//** normal function that works perfectly */

// function show(){
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function(){
//         thanks.innerHTML = `you have typed : ${self.value}`;
//     },1000);
// }

const show=() => {
    display.innerHTML = this.value; // doesn't work this keyword and arrow function.
}

searchInput.addEventListener("keyup",show)