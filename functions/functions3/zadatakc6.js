/*Write a function to create a specified number of elements with pre-filled numeric value array.
 6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

"use strict";

function fillArray(numb, value) {
    var createdArray=[];
    var i = numb-1;

    for (i; i>=0; i--){
        createdArray[i]=value;
    }

    return createdArray;
}    
console.log(fillArray(6, 33));
