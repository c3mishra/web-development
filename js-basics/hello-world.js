let a = 3;
let b = 5;
let sum = a + b;

console.log(sum);
console.log("hello world");

let str = "5";
let num = 6;

console.log(str + num); // this will concatenate as string
console.log(+str + num); // this will add as number

console.log(num + +str); //  to convert string to number prefix with +

a = null;
b = undefined;
c = {
    fname: "chandan",
    lname: "mishra"
};

console.log(c.fname);

const con = 69;
// con = 78; // This will give TypeError: Assignment to constant variable.