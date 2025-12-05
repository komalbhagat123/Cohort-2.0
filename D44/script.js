let quote = ['I think, therefore I am.','I may disagree with what you say, but I will defend to death your right to say it.','Ignorance is bliss.','Who will guard the guardians?','The world operates on sheep mentality, and I hate it.','Love your family, work super hard, live your passion.','Opportunities dont happen, you create them.','The purpose of life is a life of purpose.','Live your life to the fullest. You only get one.','Life’s like photography, you use the negatives to develop.',]

let main = document.querySelector('main');
console.log(main);

let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click',function(){
    let a = Math.floor(Math.random()*quote.length);
    let x = Math.random()*90;
    let y = Math.random()*90;
    let r = Math.random()*360;
    let s = Math.random()*3;


    let h1 = document.createElement('h1');
    h1.innerHTML = quote[a];
    h1.style.position = 'absolute';
    h1.style.top = x+'%';
    h1.style.left = y+'%';
    h1.style.rotate = r+'deg';
    h1.style.scale = s;
    
    main.appendChild(h1);

    
})

