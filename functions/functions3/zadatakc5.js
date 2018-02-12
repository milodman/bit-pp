/*Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/
"use strict";

function getlastEl(arr, n) {
    
    var newArr = [];
    var j = 0;

    if (typeof n === "undefined") {
    
        for (var i = arr.length - 1; i >= 0; i--) {
            return arr[i];
    
        }

    } else {
        
        for (i = arr.length-n; i < arr.length; i++) {
            newArr[j] = arr[i];
            j++;
        }
    }

return newArr;



}
console.log(getlastEl([1, 2, 3, 4], 2));


