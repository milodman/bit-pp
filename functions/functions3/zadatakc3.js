/* Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/
"use strict";

function filterFalcy(str) {

    var filteredArray = "";
    var filteredArrayIndex = 0;

    for (var i = 0; i < str.length; i++) {

        if (!!str[i] !== false) {


            filteredArray += str[i];
        }
    }
    return filteredArray;

}
console.log(filterFalcy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
