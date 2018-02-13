/*Sort a previously defined array. 
Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
 
"use strict"

function sortArray(arr) {
    var newArr = [];
    var j= 0;
    var x = arr.sort(function (a, b) {
        return a - b;
    });
    for (var i=0; i<x.length; i++){
        newArr[j]= arr[i]*2;
        j++;

    }
    return newArr;
    
}
console.log(sortArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));
