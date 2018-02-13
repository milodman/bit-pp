/*Define a 10 element array. Take the first two letters from every string 
(that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

"use strict"

function twoLetters(arr) {

    var str = "";

    for (var i = 0; i<arr.length; i++) {
        if (arr[i].length>2){
            for (var j =0; j<2; j++){
                str+= arr[i][j];
        
            }
        }
    }
    return str;
}
    console.log(twoLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));
    