// js for loop , for in , for of .


for(var i = 0; i <5;i++){
    console.log(i)
}
console.log(i)

let i = 0;
for(; ; i++){
    if(i<=5){
        console.log(i)
    }else{
        break
    }
}

const object = {
    name: 'Javascript',
    since: '1995',
    ceo:"raton nana"
}

for (key in object) {
    console.log(key) // output Javascript 1995 raton nana
}

// if i use forin in array we found array index number but we don't find our value,on the other hand, if we use forof in array and then array provide value not index number in the array.

const newArray =  [1,2,3,4,5];
for (iterator of newArray) {
    console.log(iterator) // array value 1,2,3,4,5
}
for (iterator in newArray) {
    console.log(iterator) // array index number 0,1,2,3,4
}