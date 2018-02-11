/* Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function mostFrequent(arr) {

    var mostFreqItem = 1;
    var counter = 0;
    var item;

    for (i = 0; i < arr.length; i++) {
//pronalazimo koilko se puta koji item nalazi u array-u
        for (j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
//utvrdjuje koji item je najcesci
            if (counter > mostFreqItem) {
                mostFreqItem = counter
                item = arr[i];
            }
        }
        counter = 0;
    }
    return item + " is the most frequent item" + " shown " + mostFreqItem + " times."
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); 

