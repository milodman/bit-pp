/*a)  Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]
    
b)  Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]

c)  Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */


"use strict";
/*
function sixA(arr, numb) {
    var newArr = [];
    var counter = 0;
    for (var i=0; i<arr.length; i++){
       
        if (arr[i]<numb){
            newArr[counter]= arr[i];
            counter++;
        }
    }
    return newArr;
}
console.log(sixA([2, 3, 8, -2, 11, 4], 6));





function sixB(arr, str) {
    var newArr =[];
    for (var i=0; i<arr.length;i++){
        var element = arr[i].toLowerCase();
        if (element.substring(0,str.length)){
            newArr.push(element);
        }
    }
    return newArr;
}
console.log(sixB(["JavaScript", "Programming", "fun", "product"], "pro"));*/

function fiveC(arr,plus) {
    var newarr = [];
    var j= 0
  for (var i=0; i<arr.length; i++){
     newarr[j] = plus(arr[i]);
     j++;
  }
return newarr;
}
console.log(fiveC([2, 3, 8, 9, 11, 8]), plusOne);


function plusOne(numb) {
    return numb +1;
}