
document.writeln("JavaScript Variables");



var age = 40;  // Number
const myName = "Niti" // String
var isTrue = true ; // boolean

console.log(typeof(age));
console.log(typeof(myName));
console.log(typeof(isTrue));

// Conversion -- Internal conversion is preferable

let score = "787";  //client is entering the score as string but we need to convert it to number for calculation

//let average1 = score /5 ; // here it not a type safety issue because of internal conversion but it is not a good practice to rely on internal conversion as it can lead to unexpected results in some cases.

let toIntScore = Number(score); 

let average = toIntScore/5;
console.log("Average is : " + average);