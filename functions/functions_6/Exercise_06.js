/*Write a function to input temperature in Centigrade and convert to Fahrenheit*

T(°F) = T(°C) × 9/5 + 32*/

"use strict"

function temperature(centrigrade) {

    var fahrenheit = centrigrade * 9 / 5 + 32

    return fahrenheit;
}
console.log(temperature(20));
