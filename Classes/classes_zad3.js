/*Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/

let arrays = [[1, 2, 3], [4, 5], [6]];


const arr = arrays.map(x => x)

//  const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // console.log(arrays.reduce(reducer));

// let b = arrays.reduce(reducer)

let a= arr[0].concat(arr[1],arr[2]);
console.log(a);



