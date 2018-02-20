/*Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

"use strict";

function duplicateElement(arr) {
        var newArr = [];
        for (var i = 0; i<arr.length; i++){
            newArr.push(arr[i], arr[i]);
           // newArr.push(arr[i]);
            
        }
        return newArr;
}
console.log(duplicateElement([2, 4, 7, 11, -2, 1]));
