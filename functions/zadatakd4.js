/*Write a program that finds the second largest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function findSecondHighestNum(arr) {

    var max = arr[0];
    var indexMax = 0;
    var secondMax = arr[0];


    for(i=1; i<arr.length; i++){

        if (arr[i]>max) {

            max = arr[i];
            indexMax = i;    
        }
    }

        secondMax = arr[0];

    for(i=0; i<arr.length; i++){
        
        if (secondMax<arr[i] && secondMax<max){
            secondMax = arr[i];
        }

    


        
    }
    return "element " + secondMax + " is  the second largest number" ;
}
console.log(findSecondHighestNum([4, 2, 2, -1, 6]));
