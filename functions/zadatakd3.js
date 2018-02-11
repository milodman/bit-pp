/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function findMinimum(arr) {

    var min = arr[0]
    var index = 0;

    for (i = 1; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
            index = i;

        }
    }
    return "element " + min + " , his index is " + index;

}
console.log(findMinimum([4, 2, 2, -1, 6]));
