console.log("Hello world")
console.warn("This is warning")
console.error("This is error")


const v = 64

console.log(`V = ${v}`)
const prompt = require("prompt-sync")()

const v2 = prompt("Type something\n>")
console.log(`What you typed was : ${v2}`)

/**
 * Three primary data types
 * string, boolean, number
 * two undefined or null types: undefined, null
 * undefined is the type as well as the only value for that type
 * same goes for null
 * You use undefined when don't know what the value would be
 * null is used when you want set something to "nothing"
 */

/*
Variable types
* let, var, const
*/

var helloWorld = "hello"
helloWorld = "world"

let x = 5
x += 1 // all valid operations

const VELOCITY = 34


/**Scoping
 * let is block scoped. const is also block scoped.
 * var is function scoped. If it's not defined inside a function, it's scoped to the entire program.
 */

/**
 * Interesting use case in scoping in functions for var variables
 */

function tests() {
  console.log(`Inside tests function before defining var, x = ${x}`)
  var x = 10
  console.log(`Inside tests function after defining var, x = ${x}`)
}

tests()

