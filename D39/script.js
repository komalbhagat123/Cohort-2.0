// 1

function sayHello() {
    console.log("Hello JavaScript");
}

sayHello();

// 2

function add(a, b) {
    return a + b;
}

console.log(add(2, 2));

// 3

let greet = (name = "Guest") => {
    console.log(`Hii ${name}`);
}
greet();

// 4

let num = (...val) => {
    let sum = 0;
    val.forEach(function (val) {
        sum += val;
    })
    return sum;
}

console.log(num(1, 2, 3, 4, 5));

// 5

(function () {
    console.log("I Run Instantly !!");
})();

// 6

function parent() {
    let a = 198;
    function child() {
        console.log(a);
    }
    child();
}
parent();

// 7

let fruits = ["Mango", "Banana", "Apple", "Guava", "Pineapple"];

fruits.push("Watermelon");
fruits.shift();
console.log(fruits);

// 8

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 9

let person = {
    name: "Komal",
    age: 22,
    city: "Ngp",
}

console.log(person.name);
console.log(person.age);
console.log(person.city); 