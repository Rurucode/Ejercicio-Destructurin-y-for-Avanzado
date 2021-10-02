// 1. Ejercicios destructuring Dado el siguiente objeto:
const empleados = [
  {"name":"Luis",
   "email":"Luis@gmail.com"},
  {"name":"Ana",
   "email":"Ana@gmail.com"},
  {"name":"Andrea",
   "email":"Andrea@gmail.com"}
]
//     Extrae la empleada Ana completa  {"name":"Ana", "email":"Ana@gmail.com"}
let [a,b] = empleados 
console.log(email)
//     Extrae el email del empleado Luis --> Luis@gmail.com
let [{name, email}] = empleados
console.log(email)
// -----------------





// 2 ----  Usa destructuración para intercambiar los valores de a y b
// // Inicialmente
let a = 5
let b = 3

let [c, d] = [b, a]
console.log(c)


// // Al final
// let a = 3
// let b = 5



//     Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32
};
//     Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow; 
// console.log(maximaHoy)
// console.log(maximaManana)

// 2. Ejercicios spread/rest

//     Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

let sumEveryOther = (...todo) =>{return todo.reduce((a, b)=>{a + b})


sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

//     Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

// addOnlyNums(1, 'perro', 2, 4); //7

//     Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

//     Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

//     Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//     Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]) // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//     Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
