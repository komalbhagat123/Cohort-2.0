// class Car {
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return this.brand +" - "+ this.speed;
//     }
// }

// let car1 = new Car("Marcedise","150 km/hr");
// let car2 = new Car("Maruti Suzuki","120 km/hr");

class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    Introduce() {
        console.log(this.name + " - " + this.rollNo);
    }
}

let stu1 = new Student("Komal", 17);
stu1.Introduce();

//es5 

function User(name) {
    this.name = name;
    this.loggedIn = function () {
        console.log("Logged In");
    }

}

let u1 = new User("Komal");
let u2 = new User("Mrudul");

console.log(u1.loggedIn === u2.loggedIn)