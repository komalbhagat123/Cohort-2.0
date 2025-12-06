let img = document.querySelector('img');
let like = document.querySelector('#like');
let love = document.querySelector('.left-left');

img.addEventListener('dblclick', function () {
    like.style.opacity = 1;
    like.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'

    setTimeout(() => {
        like.style.transform = 'translate(-50%,-315%) scale(1) rotate(60deg)'
    }, 700);

    setTimeout(() => {
        like.style.opacity = 0 ;
    }, 800);

    setTimeout(() => {
        like.style.transform = 'translate(-50%,-50%) scale(1) rotate(45deg)'
    }, 900);

    love.innerHTML = '<i class="ri-heart-3-fill"></i>';

})