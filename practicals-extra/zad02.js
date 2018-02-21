/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

"use strict";

function removeDuplicate(arr) {
    var newarr = [];
    newarr = arr.sort();

   for (var i = 1; i < newarr.length;) {
        if (newarr[i - 1] == newarr[i]) {
            newarr.splice(i, 1);
        } else {
            i++;
        }
    }
    newarr = newarr.sort(function (a, b) {  return a - b;  });
    return newarr;
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))