/*Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number*/



 function reverseNum(num) {
    var numStr = "";
    numStr += num;
    var arr = [];
    var reverseArray = [];
    var str = "";

    for (i = 0; i < numStr.length; i++) {
        arr[i] = numStr[i];
    }

    for (i = arr.length - 1,  j = 0; i >= 0; i--, j++) {
        reverseArray[j] = arr[i];
    }

    for (i = 0; i < reverseArray.length; i++) {
      str += reverseArray[i];  
    }
 
    return str;
}

console.log(reverseNum(12345));