/*Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenateArrays(arr1,arr2) { 

    var newArr = [];
    var counter = 0;

    for(i=0;i<arr1.length; i++){

        newArr[counter] = arr1[i];
        counter++
    }

    for(i=0;i<arr2.length; i++){

        newArr[counter] = arr2[i];
        counter++
    }

    return newArr;
    
}
console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));

