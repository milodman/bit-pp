// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
var arrNew =[]
function convertToNumber(arr){
   
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i] === 'undefined'   ){
            arr.splice(arr[i],1);
 
        }

      var newNumber = parseInt(arr[i]);
    
    
        arrNew.push(newNumber)
      
     
    }
    console.log(arrNew)
}

convertToNumber(["1", "21", undefined, "42", "1e+3", Infinity])