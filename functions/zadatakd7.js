/*Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwineArrays(arr1, arr2) {

    var combinedArray = [];
    var j = 0;

    for (i = 0; i < arr1.length; i++) {

        combinedArray[j] = arr1[i]
        j++;
        combinedArray[j] = arr2[i]
        j++;

    }
    return combinedArray;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));
