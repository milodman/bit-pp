/*Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. 
If there are no occurrences of the character, the function should return -1.*/

"use strict";

function occurence(str, letter) {

    for (var i = 0; i < str.length; i++) {

        var element = str[i];

        var pozicija = 0;

        if (element === letter) {
            pozicija = (i + 1);
            break;
        } else {
            pozicija = -1;

        }

    }
    return pozicija;
}

console.log(occurence('miloplrad', 'p'));