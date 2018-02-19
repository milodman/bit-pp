"use strict";

/*var k = (  function (a,b) {
    var sum = a+b;
    console.log(sum);
    
}

)(3,4);*/
/*
function outer(param) {
    function inner(theinput) {   
        return theinput * 2;
        
    }
    return 'The result is ' + inner(param);
 }
 */
//  function a() {
//     console.log('A!');
//     return function () {
//         console.log('B!');
        
//     };
//  }
 
//  console.log(a()());


// function a() {
//     console.log('A!');
//     return function () {
//         console.log('B!');
//         // return 1;
//     };
//  }
//  var bigA = a();
// //  bigA();
// console.log(bigA());


var milorad ={
    name:"Milorad",
    lastname:"mandrapa",
    age:32,
    occupation:"wannabe programmer",
    hobby:["swimming", "reading", "hiking"],
    klupa: function(par) {
        return "danas sedim sa " + par;
    }

}
//console.log(milorad);
/*
console.log(milorad.lastname);*/

console.log(milorad.klupa("Miroslavom"));

/*milorad = milorad.age;
console.log(milorad);

console.log(typeof milorad);*/
milorad.hobby[1]

var miii ={

}

miii.name = "Miroslav";
delete miii.name;
miii.hobby = ["swimming", "reading", "hiking"];
console.log(miii);




