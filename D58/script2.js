// function abcd() {
//     console.log(this.name);
// }

// let obj = {
//     name : "Harsh"
// }

// abcd.call(obj);

const laptop = {
    brand: "LENEVO",
    price: 54000,
    start: function () {
        console.log("Laptop Started");
    },

    IncreasedPrice : function(){
        newPrice = this.price + (this.price/10);
        console.log(newPrice);
    }
}

const laptop1 = {
    brand: "HP",
    price: 50000,
    start: function () {
        console.log("Laptop Started");
    },

    IncreasedPrice : function(){
        newPrice = this.price + (this.price/10);
        console.log(newPrice);
    }
}

///

class Employee{
    constructor(name,salary){
        this.name = name,
        this.salary = salary
    }
    showDetails(){
        console.log(this.name + " "+this.salary);
    }
}

let e1 = new Employee('Komal',50000);


class BankAccount{
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount;
        console.log("Balance Added");
    }
}

let ac1 = new BankAccount("Komal Bhagat",100);
let ac2 = new BankAccount("Reshu Sharma",100);


let profile = {
    username : "Komal",
    printName : function(){
        console.log(this.username);
    },
}