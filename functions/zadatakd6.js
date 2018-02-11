/* Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

function isArraySymetric(arr) {
    

    for (i = 0, j = arr.length-1; i < arr.length, j >= 0; i++ , j--) {
        if (arr[i] === arr[j]) {
            return "The array is symmetric"
        } else {
            return "The array isn’t symmetric"
        }
    }
}
console.log(isArraySymetric([2, 4, -2, 7, -2, 4, 2]));


