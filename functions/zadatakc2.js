/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/


function joinElements(arr) {

    var niz = "";

    for (i = 0; i < arr.length; i++) {

        if ( arr[i] !== undefined && !!arr[i]) {

            niz+=arr[i];
        }

    }
    return niz;
    
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));
