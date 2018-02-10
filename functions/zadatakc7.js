/*Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.*/

function perfectNumber(numb) {

    var part = 0;

    for (i=1; i<=numb/2; i++){
        if (numb % i === 0){
            part += i;
        }
    }

            if (part === numb && part!== 0) {
                return (numb + " is a perfect  number");
            } else {
                return (numb + " is not a perfect number");
            }
    
} 
    console.log(perfectNumber(25));
    