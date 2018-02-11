/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/
/*
function multipleArray(arr) {

    var newArray = [];
    var counter = 0;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {

            newArray[counter] = arr[i] * 2;
           counter++;

        }
        else if (arr[i] <= 0) {

            newArray[counter] = arr[i];
           counter++;

        }

    }
    return newArray[counter];

}
console.log(multipleArray([-3, 11, 5, 3.4, -8]));*/

function multipleArray(arr) {

    var newArr = [];
    var j = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            
            newArr[j] = arr[i] * 2;
            j++;

        } else if (arr[i] <= 0) {

            newArr[j] = arr[i];
            j++;
        }
    }

    return newArr;
}
console.log(multipleArray([2, 3, 4.5, -3, 0]));
