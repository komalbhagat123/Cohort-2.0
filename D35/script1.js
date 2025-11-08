let word = prompt("Enter Word");
let count = 0;

while(word !== "stop"){
    if(word === "yes"){
        count++;
    }
    word = prompt("Enter Word");
}

console.log(count);