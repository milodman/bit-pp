/*Write a function that finds the smallest element of a given array.
 The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }*/

"use strict";

function smallestPosition(arr) {
    var elem = (Math.min(...arr));
    var position = arr.lastIndexOf(elem);
    return "{ minValue: " + elem + ", minLastIndex: " + position + "}"; 
}
console.log(smallestPosition([1, 4, -2, 11, 8, 1, -2, 3]));