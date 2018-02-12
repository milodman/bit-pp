/*Write a function that takes a number and returns array of its digits.*/

"use strict"

function returnDigit(insertedNum) {

    var number = [];
    var k = 0;

    for (var i = 0; i < insertedNum.length; i++) {
        number[k] = insertedNum[i];
        k++;
    }

    return number;
}
console.log(returnDigit('385'));

