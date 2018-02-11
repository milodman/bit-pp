/*Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 

Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertElemInArray(arr, element, position)  {

    var newArr = [];
    var counter = 0;

    for (i=0;i<arr.length; i++){
        if (i !== position) {

            newArr[counter] = arr[i];
            counter++;
        } else {

        newArr[counter] = element;
        counter++;

        }
    }
    return newArr;
    
}
console.log(insertElemInArray([2, -2, 33, 12, 5, 8], 78, 3));
