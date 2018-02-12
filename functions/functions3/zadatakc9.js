/*Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"
*/
"use strict";


function hideEmail(email) {

    var str = "";
    var strTwo = "";
    var strThree = "";
    var strFour = "";
    var strFinal
    var counter

    var replace = "*"

    for (var i = 0; i < email.length; i++) {
//pozicija @
        if (email[i] === "@") {
            counter = i;
            break;

        }
//dobijema sve pre @
        str += email[i];
    }
//maskira deo sa email adresom
    for (i = 0; i < str[i]; i++) {
        strTwo += str[i];
    }

    strThree = strTwo + "....."

//dodaje deo nakon @
    for (i=counter; i<email.length; i++) {
        strFour +=email[i]
    }

    strFinal = strThree + strFour;


    return strFinal

}
    console.log(hideEmail("milodman@yahoo.com"));
    



