/*Write a function to find the position of the last occurrence of a character in a string.
 The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/

function lastOccurence(str, letter) {

    for ( i=str.length; i>0; i--) {
         
        var element = str[i];
        var pozicija = 0;

        if (element === letter) {
            pozicija = (i+1);
            break;
        }
            else {
                pozicija = -1;
            }
    }
    return pozicija;
}
console.log(lastOccurence("srculencaaaq", "a"))