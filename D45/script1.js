let btn = document.querySelector('button');
let a = 0;
btn.addEventListener('click',function(){
    let num = setInterval(() => {
        a++;
        console.log(a);
    }, 500);

    setTimeout(() => {
        clearInterval(num);
    }, 5000);
})