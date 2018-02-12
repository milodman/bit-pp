"use strict";

function abc(str, num) {
    var niz = "";
    for (var i = 1; i <= num; i++) {
       niz += str;
    }
    console.log(niz)
}
abc("new", 3);