// set and map

for (value of [1,2,3,4,5]) {
    // console.log(value);
}

for (ch of 'chandan') {
    // console.log(ch);
}

let s = new Set(['a','b','c']);
for (val of s) {
    // console.log(val);
}

let m = new Map([
    ['chandan', 1],
    ['ak', 2],
    ['raj', 3]
]);

for(key in m) {
    console.log(key);
}

for (val of m) {
    console.log(val);
}