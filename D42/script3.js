let dis = document.querySelector('h2');
console.log(dis);

let inc = document.querySelector('#inc');
console.log(inc);

let dec = document.querySelector('#dec');
console.log(dec)

let reset = document.querySelector('#reset');
console.log(reset);

let a = 0;

inc.addEventListener('click',function(){
    a++;
    console.log(a);
    dis.innerHTML = a;

})

dec.addEventListener('click',function(){
    a--;
    console.log(a);
    dis.innerHTML = a;
})

reset.addEventListener('dblclick',function(){
    console.log("reset")
    a = 0;
    dis.innerHTML = a;
})