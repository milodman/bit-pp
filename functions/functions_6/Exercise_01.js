'use strict';

function countVowels(str) {
    var counter = 0;

    for(var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a':
                counter++;
                break;
            case 'e':
                counter++;
                break;
            case 'i':
                counter++;
                break;
            case 'o':
                counter++;
                break;
            case 'u':
                counter++;
                break;
            default:
                break;
        }
    }

    return counter;
}

var sentence = "JavaScript is cool!";
console.log(countVowels(sentence));
