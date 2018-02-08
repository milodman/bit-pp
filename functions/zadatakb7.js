/*Write a function to convert string into an array. Space in a string should be represented as “null” in new array.*/

function strIntoArr(stringg) {
    var arr = [];

    for (i = 0; i < stringg.length; i++) {

        if (stringg[i] === " ") {

            arr[i] = null;
        
        } 
        else {
            arr[i] = stringg[i];
        }
    }
    return arr;
}
console.log(strIntoArr("Milorad mnd mandda"));

