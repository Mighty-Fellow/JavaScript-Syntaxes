// ES6 fat arrow function

// var javaScript = {
//     name: 'Javascript',
//     libraries: ["React","Anguler","Vue"],
//     prrintLibraries: function () {
//         var self = this;
//         this.libraries.forEach(function (a) {
//             console.log(`${self.name} loves ${a}`)
//         })
//     }
// }
// javaScript.prrintLibraries();

var javaScript = {
    name: 'Javascript',
    libraries: ["React","Anguler","Vue"],
    prrintLibraries: function () {
        this.libraries.forEach((a) =>{
            console.log(`${this.name} loves ${a}`)
        })
    }
}
javaScript.prrintLibraries();