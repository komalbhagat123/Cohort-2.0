let pass = "Komal";
let attempt = 0;
let open = false;

let password = prompt("Enter Password");

if(password === null){
    console.error("You Cancelled it");

}
else{

    if(password.trim() === ""){
        console.warn("Enter Password !!");
    }

    else{

        attempt ++;
        if(pass === password) {open = true;}
        while(password !== pass){

            if(attempt === 3) {
                console.error("Account Locked")
                break;
            }
            password = prompt("Enter Password");
            attempt++;
        }   
        if(password === pass){
            open = true;
        }

        if(open === true){
            console.log("Success !!");
        }

    }

}