class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log("User Logged in");
    }
}

let u1 = new User("Komal", "kb@g.com");
let u2 = new User("Karan", "kr@g.com");
let u3 = new User("Jagat Janani", "jj@j.com");
let u4 = new User("Rahul", "rr@r.com");


let product = {
    name : "cap",
    price : 1000,
    discountedPrice : function(){
        return this.price - 200;
    },
};

console.log(product.discountedPrice());