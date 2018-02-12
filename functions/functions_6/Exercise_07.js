/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

"use strict"

function maxInArray(arr) {
    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        
        if (typeof arr[i] === "number" && max < arr[i]) {

            max = arr[i];
        }
    }
    return max;
}
console.log(maxInArray([111,22323,3,"ss", 8, "k",true, 12, 7]));
