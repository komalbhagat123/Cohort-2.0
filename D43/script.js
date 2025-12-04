let box = document.querySelector('#box');

console.log(box);

let btn = document.querySelector('button');

console.log(btn);

let head = document.querySelector('h2');
console.log(head);

btn.addEventListener('click',function(){
    let r = Math.floor(Math.random()*256);
    console.log(r);
    let g = Math.floor(Math.random()*256);
    console.log(g);
    let b = Math.floor(Math.random()*256);
    console.log(b);

    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    head.innerHTML = `rgb(${r},${g},${b})`;
})