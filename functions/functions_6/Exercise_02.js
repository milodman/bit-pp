/*Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

"use strict"

function combineTwoArrays(arr1,arr2){
    var finalArr = [];
     
    for (var i = 0, j= 0; i < arr1.length; i++, j++) {
        finalArr[j] = arr1[i];
        j++;
        finalArr[j] =arr2[i];     
    }
    return finalArr;
}
console.log(combineTwoArrays(['a','b','c'], [1,2,3]));
