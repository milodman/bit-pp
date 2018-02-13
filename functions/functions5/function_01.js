/*Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

"use strict"

function minAndMax(arr) {
    
    var min = arr[0];
    var max = arr[0];
    var minIndex;
    var maxIndex;
    var x;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        } if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    x = arr[maxIndex];
    arr[maxIndex] = arr[minIndex];
    arr[minIndex] = x;

return arr; 
}
console.log(minAndMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

