/*a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/
"use strict";

function something(arr) {
    var output = "";
    var counter = 0;
    var midIndex = arr.length / 2 - 0.5;
    var midd = arr[midIndex];

    if (arr.length % 2 !== 0) {
        output = "true";
        
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] < arr[midIndex])
                    counter++
                    
            }
            
        


            
        }
        else output = "error";
        counter = "";
        
        return output + " " + counter;
}
console.log(something([1, 2, 2, 1]));