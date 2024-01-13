// types of loops
// for, while, do-while, for of, for in

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('looping thorugh an array');
let arr = [1,2,3,4,5];

for (i in arr) {
    console.log(i);
}

let obj = {
    "chandan" : 1,
    "pk" : 2,
    "raj" : 3
}

for (key in obj) {
    console.log("key: " + key);
}

for (value of 'chandan') { // if you use in instead of of it will print index
    console.log("value: " + value);
}