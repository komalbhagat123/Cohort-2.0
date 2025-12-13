let body = document.body;
let cursor = document.querySelector('#cursor');

body.addEventListener('mousemove',function(val){
    console.log(`${val.x},${val.y}`);
    cursor.style.left = val.x+'px';
    cursor.style.top = val.y+'px';
})

