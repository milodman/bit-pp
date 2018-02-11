/*Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteGivenElement(arr,element) {

    var clearedArr = []
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === element){

            continue;
        } else {
            clearedArr[counter] = arr[i];
            counter++
        }
        
    }
    return clearedArr;
}
console.log(deleteGivenElement([4, 6, 2, 8, 2, 2],2));
