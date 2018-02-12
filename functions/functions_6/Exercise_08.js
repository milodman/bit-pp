/*Write a function to find the maximum and minimum elements. Function returns an array.*/

"use strict"

function maxAndMinElement(arr) {
    
    var max = arr[0];
    var min = arr[0];


    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
            continue;
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        var maxAndMin = [max, min]
        return maxAndMin;

    }
}
    console.log(maxAndMinElement([111, 22323, 3, 8, 12, 7]));
