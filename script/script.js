
/*function multiply(num1, num2) {
    return num1 * num2;
 }*/
 
let multiply = (num1,num2) => {return num1*num2;}

console.log("el resultat de la multiplicació de 2 * 3 = " + multiply(2, 3));
console.log("el resultat de la multiplicació de 4 * 5 = " + multiply(4, 5));
 
 /*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
 }
 */

let toCelsius = (grad) => {return (5/9) * (grad-32)}

console.log("20 graus Farenheit son " + toCelsius(20) + " graus celsius")

 // This function returns a string padded with leading zeros
 /*function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  } */
  
  let padZeros = (num,totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  }
  console.log("tenim un total de " + padZeros(2,10));
 
  /*
 function power(base, exponent) { 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 } */
 
 let power = (base,exponent) => {
    let result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 }
 
 console.log("El resultat es " + power(4,3));
 
 /*
 function greet(who) {
     console.log("Hello " + who);
 }
 */

 let greet = (who) => {console.log("Hello " + who)};
 
 greet("Cristian");
