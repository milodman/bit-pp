/*Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

"use strict"

function rotatesList(arr, k) {

    var rotatedList = [];
    var j = 0;

    for (var i = k; i < arr.length; i++) {
        rotatedList[j] = arr[i];
        j++;
    }
    for (var i = 0; i < k; i++) {
        rotatedList[j] = arr[i];
        j++;
    }
    return rotatedList;
}

console.log(rotatesList([1, 2, 3, 4, 5, 6], 2));