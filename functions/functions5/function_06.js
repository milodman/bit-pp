/*Write a program that uses a loop to add all the even numbers from 1 to 1000 and 
subtracts all the odd numbers 1 to 500 from the calculated sum. 
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/
"use strict"

function craziness(num) {
    var sumOdd= 0;
    var sumEven=0;
    var wanted;

    for (var i=0; i<=num;i++){
        if (i%2 === 0) {
            sumEven +=i;
        } else if (i%2 === 1 && i<num/2){
            sumOdd +=i;
        }
    }
    wanted = (sumEven - sumOdd)*12.5;

    return wanted;
}   
console.log(craziness(1000));
