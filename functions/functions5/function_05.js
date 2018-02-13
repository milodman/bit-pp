/*Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

"use strict"

function sortAnArray(arr) {
   var newArr = arr.sort(function(b, a) {
        return a - b;
      });

      return newArr;
}
console.log(sortAnArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));
