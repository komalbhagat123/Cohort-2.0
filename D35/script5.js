let count = 0;

for(let i = 1 ; i < 21 ; i++){
    if(count === 3) break;

    if(i % 2 === 1){
        console.log(i);
        count++;
    }
}