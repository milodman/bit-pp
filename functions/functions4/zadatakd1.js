/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
"use strict";

function checkItem(arr, element) {

    

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
           return "yes";
        } else {
            return "no";
        }

    }
   

}
    console.log(checkItem([5, -4.2, 18, 7], 22));
    