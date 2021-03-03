
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

 /******************EXERCICI 2 **************************/
 
 /*users.map(function (user) {
    user.firstName;
 });*/
 
let users = [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }
];

let usersName = [];users.forEach(function (user) {
    //usersName.push(user.firstName);
    console.log(user.firstName);
});


/******************EXERCICI 3 **************************/
 

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let total = epic.reduce(function (previous, current) {
    return previous + " " + current;
});

console.log(total);


/******************EXERCICI 4 **************************/

let str = ['a', 'be', 'ce', 'de', 'e', 'efa'];

let revert = (str) => { 
    console.log(str.reverse()) 
}

revert(str);

/******************EXERCICI 5 ***************************/


function b(x) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
 }
 function a() {
    b(10).then(v => {
    doMoreWork(v);
    });
 }
 
 function doMoreWork(y) {
     console.log("Apareix el missatge després de 2 segons");
 }
 
 //El missatge apareixerà després de 2 segons per consola
 a(1);
 
 
 /********************EXERCICI 6 ****************************/
let tasques = new Map();
let tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
];
    
tasks.forEach(desplega);

function desplega(item, index) {
    tasques.set(index,item.name);
}

console.log(tasques);

/***********************EXERCICI 7/8 ******************************/

//Creem les crides a les funcions segons el botó de la pantalla que s'hagi clicat
document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("taula").addEventListener('submit', crearTaula); 
});

let mostraTaula;

function crearTaula(evento) {
   evento.preventDefault();
   let num1 = document.getElementById("number1");
   let num2 = document.getElementById("number2");
   let linia;
   let taula = new Array;
   
   if(validarFormulari(num1, num2)){
      for(let i=0;i<num2.value;i++){
         linia = num1.value + " X " + (i+1) + " = " + num1.value*(i+1);
         taula.push(linia);
      }
      
      mostraTaula = "<table class='table'>";
      taula.forEach(dibuixarTaula);
      mostraTaula += "</table>";
      document.getElementById('result').innerHTML = mostraTaula;
   };
   
}

function validarFormulari(num1, num2){
   let acumErrores = 0;
   
   let numError = document.getElementById("numError");
   let numError2 = document.getElementById("numError2");
   
   if (num1.value == ""){
      num1.classList.add("is-invalid");
		numError.classList.add("invalid-feedback");
		numError.textContent = "El camp es obligatori";
      acumErrores ++;
   }else if (isNaN(num1.value)){
      num1.classList.add("is-invalid");
		numError.classList.add("invalid-feedback");
		numError.textContent = "Ha de ser de caràcter numèric";
      acumErrores ++;
   }else {
      num1.classList.remove("is-invalid");
		num1.classList.add("is-valid");
      numError.textContent = "";
   }
   
   if (num2.value == ""){
      num2.classList.add("is-invalid");
		numError2.classList.add("invalid-feedback");
		numError2.textContent = "El camp es obligatori";
      acumErrores ++;
   }else if (isNaN(num2.value)){
      num2.classList.add("is-invalid");
		numError2.classList.add("invalid-feedback");
		numError2.textContent = "Ha de ser de caràcter numèric";
      acumErrores ++;
   }else {
      num2.classList.remove("is-invalid");
		num2.classList.add("is-valid");
      numError2.textContent = "";
   }
   
   if (acumErrores > 0){
      return false;
   }else{
      console.log("Tot correcte!!");
      return true;
   } 
}

function dibuixarTaula(item){
   mostraTaula += "<tr><td scope='row'>" + item + "</td></tr>";
}