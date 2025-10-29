"use strict";
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

/**
 * Type Coercison in javascript:
 * If you add an integer and a boolean, it will not throw an error, rather
 * it will add those things with implicit type conversion
 */

const a1 = 4
let a2 = "yes"

console.log(`${a1} + ${a2} = ${a1 + a2}`)

a2 = false

console.log(`${a1} + ${a2} = ${a1 + a2}`)

var a3 = true
console.log(`${a1} + ${a3} = ${a1 + a3}`)


a2 = "123"

console.log(`${a1} + ${a2} = ${a2 + a1}`) // Expect addition of 4 + 123 = 127
console.log(a2 * a1)

a2 = "hello"

console.log(a2 - a1)

a2 = "47843"

console.log(Number(a2) + a1)

a3 = "2345px"

// ERROR: console.log(Number(a3))

console.log(parseInt(a3))

a3 = "13.123px"

console.log(parseFloat(a3))

// Boolean to number
console.log(Number(true) + 3)

// Number to string
console.log(String(123) + 456) // 123456

// Even adding an empty string type coercsion works

console.log(123 + "")

// toString method

console.log(parseFloat(a3).toString())


/* Comparison operators
* Loose equality operators
==
* strict equality operators
===
* Other operators
!=
!==
<
>
<=
>=
*/

// Loosely equivalent: javascript tries to convert the type to string when
// comparing loosely and then gives the output

console.log(true == 1) // true
console.log(null == undefined) // TRUE
console.log(null == true) // false
console.log(null == false) // false
console.log(undefined == true)  // false
console.log(undefined == false) //false
console.log("124" == 124) // TRUE
console.log("" == 0) // TRUE
console.log("" == []) // TRUE
console.log("1, 2" == [1, 2]) // FALSE
console.log("1,2" == [1, 2]) // TRUE : difference of space between "1," and "2"

// ALWAYS USE === sign
// BE CAREFUL WHEN using < operator
console.log("2" < "3") // true
console.log("1" < 0) // false
// ALWAYS better to do perform type conversions before these things.

// Logical operators
// || (OR): Returns the first truthy value. If the left side is falsy, it returns the right side.
// && (AND): Returns the first falsy value. If the left side is truthy, it returns the right side.
console.log(true || false)
console.log("" || "hello")
console.log(true || "hello")
console.log(true && "hello")

// Type conversions
console.log(Boolean(2) || Boolean("Hello"))

// if else
if (true) {
  console.log("Hello world")
} else if (false) {
  console.log("")
}

// without braces

if (true)
  console.log("hello world")
else
  console.log("run")  // only line associated with else
console.log("")

const cond = 2 > 3 ? "Hello" : "no"
console.log(cond)

// Switch statement
const value = 3
switch (value) {
  case 3:
    console.log("3 is cool")
    break;
  case 4:
    console.log("4 if not good")
    break;
  default:
    console.log("this is default")
    break;
}

// Array - need not to have same type.
const array = [1, 2, 3, 4, true]

const array2 = Array.from("hello")
console.log(array2)

const array3 = "nick"

console.log(array3[array3.length - 1])
console.log(array3)
console.log(typeof(array3))

// index bypassing
array2[array2.length * 5] = "test"
console.log(array2)