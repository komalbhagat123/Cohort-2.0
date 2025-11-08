let num = prompt("Enter Number");
num = Number(num);

while (num % 2 === 1) {
    let num = prompt("Enter Number");
    num = Number(num);
    if(num % 2 === 0){
        break;
    }
}
