let num1 = prompt("Enter First Number");
num1 = Number(num1);
let num2 = prompt("Enter Second Number");
num2 = Number(num2);

if (num2 < num1) {
    for (let i = num1; i >= num2; i--) {
        console.log(i);
    }
}
else {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}