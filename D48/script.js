let chutki = document.querySelector('img');

let msg = document.querySelector('h3 span');

let body = document.body;
console.log(body);

chutki.addEventListener('mouseenter',function(){
    msg.innerHTML = 'Chutki se Dur ho jaoo.....🤬'
    body.style.backgroundColor = 'red';
})

chutki.addEventListener('mouseleave',function(){
    msg.innerHTML = 'Ab dur hi rhnaa 😠'
    body.style.backgroundColor = 'black';
})