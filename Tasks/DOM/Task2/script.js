let btn = document.querySelector('button');

console.log(btn);

let h2 = document.querySelector('h2');
console.log(h2);

let pro = document.querySelector('.inner');
console.log(pro);



btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none';

    let grow = 0;

    let num = 50 + Math.random()*50; 
    console.log(num);
    console.log(`Its takes ${num/10} sec`);
     let download = setInterval(() => {
        grow++;
        h2.innerHTML = grow+'%';
        pro.style.width = grow+'%';
        console.log(grow);


        if(grow >= 100){
        clearInterval(download);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
     };

     }, num);

     
})