let balance = 1000;

for (let i = 1; i < 4; i++) {

    let amt = prompt("Enter Amount");
    Number(amt);

    if(balance >= amt){
        balance -= amt;
    }
    else{
        console.error("Insufficient Balance");
        break;
    }
}
console.log(`Balance : ${balance}`);