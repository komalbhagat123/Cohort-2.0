let age = prompt("Enter Age ");

console.log(age);

if(age === null){
    console.error("You Cancelled it");
}

else{
    if(age.trim() === ""){
        console.error("Please Enter Age")
    }
    else{

        Number(age)

        if(isNaN(age)){
            console.error("Please Enter a age");
        }
        else{
            
            if(age >= 18 && age <= 120){
                console.log("You are Eligible");
            }

            else if(age >= 0 && age < 18){
                console.log("Not Eligible")
            }
            else{
                console.error("Invalid Age");
            }
        }

    }
}
