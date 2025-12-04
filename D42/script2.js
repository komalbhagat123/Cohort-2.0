let box = document.querySelector('#box');

let btn = document.querySelector('button');

console.log(box);
console.log(btn);

box.innerHTML = '<i>Press Button Below<i/>';

box.style.color = 'black';

btn.addEventListener('click',function(){
    btn.style.scale = (0.9);
    console.log('clicked');
}
)
