/*Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

"use strict";

function reverse(str) {
    var reversedString ="";
     
    for (var i = str.length; i >= 0; i--){
            reversedString += str[i];
    }
    return reversedString;
}
    console.log(reverse("Belgrade Institute of Technology"));
    