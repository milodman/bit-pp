/*Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. 
Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

"use strict"

function combinations(num) {        
        var arr =[]
        var i;
        var j;
        var counter = 0;
        for (i=1; i<num; i++) {
            for (j =1; j<num; j++){
                if ( i === j){
                    continue;
                } else {
                    arr[counter] =(i,j);
                    counter++;

                }
            }

        }
    return arr;
}       
console.log(combinations(7));
