let h1 = document.querySelector('h1');
console.log(h1)

let btn = document.querySelector('button');
console.log(btn);

console.log("Hello 1");

setTimeout(() => {
    console.log("Hello 2");
}, 5000);

console.log("Hello 3");

btn.addEventListener('click',function(){
    h1.innerHTML = 'Changing user...';

    setTimeout(() => {
        h1.innerHTML= "I am Harsh"
    }, 3000);
})

