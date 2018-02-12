/*Write a program that prints a multiplication table for numbers up to 12.*/

"use strict"

function multiplicationTable(num) {

    var i;
    var j;
    var multi="";

    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            multi = multi + " " + i * j;
        }
        multi = multi + "\n";

    }
    return multi;
}
console.log(multiplicationTable(12));
