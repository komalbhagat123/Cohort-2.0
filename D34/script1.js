for (let i = 1; i < 11; i++) {

    console.log(`5 * ${i} = ${5 * i}`);

}

let count = 0;
for (let i = 1; i < 16; i++) {

    if (i > 8) {
        console.log(i);
        count++;
    }
}

console.log(`Count : ${count}`);


let password = prompt("Enter Password : ");

let pass = "Komal";

if (password === null) {
    console.error("You Cancelled It");
}
else {

    if (password.trim() === "") {
        console.warn("Enter Password");
    }

    else{
        if(password === pass){
            console.log("Access Accepted");
        }

        else{
            console.error("Access Denied");
        }
    }

}