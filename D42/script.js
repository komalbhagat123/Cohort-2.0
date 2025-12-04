let heading = document.querySelector('h1');

console.log(heading);

heading.innerHTML = 'Helllooooo Bachhhoooooooo'

let head2 = document.querySelector('h2');

console.log(head2);

head2.innerHTML = 'Bhagat';

head2.style.backgroundColor = 'red';
head2.style.color = 'black';

head2.addEventListener('dblclick',function(){
    head2.innerHTML = 'Clicked';
})
