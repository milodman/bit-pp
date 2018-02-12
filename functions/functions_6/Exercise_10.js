/*Write a function to find the element that occurs most frequently.*/

"use strict"

function mostFrequentElement(arr) {

    var mostFreq = 1;
    var counter = 0;
    var element;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i; j < arr.length; j++) {

            if (arr[i] == arr[j])
                counter++;

            if (mostFreq < counter) {

                mostFreq = counter;
                element = arr[i];
            }
        }
        counter = 0;
    }
    return "The most frequent element is" + " " + element; 
}

console.log(mostFrequentElement([3, "a", "k", 3, "a", 2, 7,  4, 9, 3,12, 3, "f", "s", 88]));
