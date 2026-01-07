// console.log(this);

// function abc(){
//     console.log(this);
// }

// abc();

// let obj = {
//     fnc: function(){
//         console.log(this);
//     }
// };
//  obj.fnc();

let obj = {
    fnc : function(){
        function abc(){
            console.log(this);
        }
        abc();
    }
}

obj.fnc();