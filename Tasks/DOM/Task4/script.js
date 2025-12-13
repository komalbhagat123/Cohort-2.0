let body = document.body;

let head = document.querySelector('h2');

let aud1 = new Audio ('./Sounds/24.mp3');
let aud2 = new Audio ('./Sounds/29.mp3');
let aud3 = new Audio ('./Sounds/36.mp3');
let aud4 = new Audio ('./Sounds/41.mp3');
let aud5 = new Audio ('./Sounds/48.mp3');
let aud6 = new Audio ('./Sounds/53.mp3');
let aud7 = new Audio ('./Sounds/60.mp3');
let aud8 = new Audio ('./Sounds/64.mp3');
let aud9 = new Audio ('./Sounds/65.mp3');
let aud10 = new Audio ('./Sounds/69.mp3');
let aud11 = new Audio ('./Sounds/72.mp3');
let aud12 = new Audio ('./Sounds/77.mp3');
let aud13 = new Audio ('./Sounds/84.mp3');
let aud14 = new Audio ('./Sounds/96.mp3');


body.addEventListener('keydown',function(dets){
    if(dets.code === 'KeyA'){
        head.innerHTML = dets.code;
        aud1.play();
    }
    else if(dets.code === 'KeyS'){
        head.innerHTML = dets.code;
        aud2.play();
    }
    else if(dets.code === 'KeyD'){
        head.innerHTML = dets.code;
        aud3.play();
    }
    else if(dets.code === 'KeyF'){
        head.innerHTML = dets.code;
        aud4.play();
    }
    else if(dets.code === 'KeyG'){
        head.innerHTML = dets.code;
        aud5.play();
    }
    else if(dets.code === 'KeyH'){
        head.innerHTML = dets.code;
        aud6.play();
    }
    else if(dets.code === 'KeyJ'){
        head.innerHTML = dets.code;
        aud7.play();
    }
    else if(dets.code === 'KeyK'){
        head.innerHTML = dets.code;
        aud8.play();
    }
    else if(dets.code === 'KeyL'){
        head.innerHTML = dets.code;
        aud9.play();
    }
    else if(dets.code === 'KeyZ'){
        head.innerHTML = dets.code;
        aud10.play();
    }
    else if(dets.code === 'KeyX'){
        head.innerHTML = dets.code;
        aud11.play();
    }
    else if(dets.code === 'KeyC'){
        head.innerHTML = dets.code;
        aud12.play();
    }
    else if(dets.code === 'KeyV'){
        head.innerHTML = dets.code;
        aud13.play();
    }
    else if(dets.code === 'KeyB'){
        head.innerHTML = dets.code;
        aud14.play();
    }
    
})
