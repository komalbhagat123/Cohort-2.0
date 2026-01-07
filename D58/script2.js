function abcd() {
    console.log(this.name);
}

let obj = {
    name : "Harsh"
}

abcd.call(obj);