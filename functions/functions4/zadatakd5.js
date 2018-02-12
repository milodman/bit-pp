/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
"use strict";

function sumOfPositiveNums(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return "Sum of positive elements in array is " + sum;
}
console.log(sumOfPositiveNums([3, 11, -5, -3, 2]));
