"use strict";
/*
function outer(param) {
    function inner(theinput) {
        return theinput * 2;
    }
    return 'The result is ' + inner(param);
 }
console.log(outer(9));
  
function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
 }
 console.log(a();

 *//*
function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
 }
 var bigA = a();
 bigA();*/

 var book = {
    title: "A Game Of Thrones",
    author: author
 };
 
 var author = {
    name: "George R.R. Martin",
    quotes: [
        "Sleep is good but books are better."
    ]
 };
 
 console.log(book.author.name);
 