// 1

function pure(a, b) {
    console.log(a + b);
}

pure(1, 9);
pure(1, 9);
pure(1, 9);

let global = 0;
function impure(a) {

    global++;
    console.log(a + global);
}

impure(2);
impure(2);
impure(2);

// 3

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map(function (val) {
    return val * val;
})

console.log(newArr);

// 4 

let arr2 = arr.filter(function (val) {
    return val % 2 === 0;
})

console.log(arr2);

// 5
let salary = [1000, 2000, 3000];
let arr3 = salary.reduce(function (acc, val) {
    return acc + val;
}, 0);

console.log(arr3);

// 6

let names = ["Komal","Ram","Om","Abhishek","Mrudul","Ajay"];

let arr4 = names.some(function(val){
    return val.length > 3 ;
})

let arr5 = names.every(function(val){
    return val.length > 3 ;
})

console.log(arr4);
console.log(arr5);

// 8


let user = {
    address : {
        city : "Nagpur"
    }
}

