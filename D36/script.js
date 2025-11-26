let counter = 0;

for(let i = 1 ; i < 6 ; i++){
    let num = prompt("Enter Number");
    Number(num);

    if(num>=0){
        counter++;
    }
}
console.log(`Positive Number Occurs ${counter} times`);