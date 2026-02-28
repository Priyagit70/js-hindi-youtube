// ********************** Conversion ********************

let score = null

// console.log(score);
// console.log(typeof score)


let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber); 

// "33" => number
// "33abc" => NaN
// "true" => 1, false => 0

let isLoggedIn = NaN
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false 
// "" => false; "priya" => true 
// undefined => false; null=> false; NaN => false

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//  *********************** Operation ***********************

let value =3
let negValue = -value
// console.log(negValue)

// console.log(3+3)
// console.log(3-3)
// console.log(3/3)
// console.log(3*3)
// console.log(3**3)
// console.log(3%3)

// console.log("1" +2 + 3);
// console.log(1 + "2" + 3);
// console.log(1 + 2 + "3");


let gameCounter = 100
++gameCounter
console.log(gameCounter)