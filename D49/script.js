let allBtn = document.querySelectorAll('button');

console.log(allBtn);

allBtn.forEach(function (elem) {
    elem.addEventListener('click', function () {
        
        if(elem.innerHTML === 'Add Friend❤️'){
            elem.innerHTML = 'Remove Friends';
        }
        else{
            elem.innerHTML = 'Add Friend❤️';
        }
        
    })
})