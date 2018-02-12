//Write a function to get the first n characters and add “...” at the end of newly created string.]
"use strict";

function getFirstCharacter(str, n) {
    
    var strNew = "";
    
    for (var i = 0; i < n; i++) {
            strNew =strNew + str[i];
            
        }
            strNew = strNew + "...";
            return strNew;
}

        console.log(getFirstCharacter("milorad",4));