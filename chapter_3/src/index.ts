import { fips } from "crypto";

function squareOf(n: number) {
    return n * n;
}

squareOf(2) 

//* any
// can do any type, but it basically means you're not using the tools right

//* unknown
// won't let you use these types until you check what it is; you have to prove to JS that you know what it is
// use typeof to check / prove

//* boolean
// Type literals: Type that supports one value and nothing else. 
let a: true = true; // Is a boolean type literal

//* number
// When you use let x = 27 it becomes type number
// when you use const x = 27 it becomes type 27

//* bigint 
// Todo - research this more

//* string

//* symbol
// Unique - even if a= Symbol(1) and b = Symbol(1), a ==b will return false

//* Objects
// Objects should be inferred, or otherwise you have to tell the object the type of every value inside it
// object is very vague so TS will try to play security - it wants us to be specific!
// objects are still very much mutable in TS

let aa: {b: number}; // aka 'let aa be an object that contains a number b'

// aa = {};
aa = {
    b: 1,
    // c: 2,
}

// difference between {}, object, and Object (p.29-30)
type Age = number 
type Person = {
    name: string
    age: Age 
}

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
} // This is beautiful

// can't declare a type twice - 
type Color = 'red'
// type Color = 'blue'


// UNIONS - re-draw pg. 32
type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog 
type CatAndDog = Cat & Dog 

let rex = {
    name: 'Rex',
    barks: true,
    wags: true,
}

let confused = {
    name: 'Blex',
    barks: true,
    wags: true,
    purrs: true,
}

// Out in the wild
function trueOrNull (isTrue: boolean) {
    if (isTrue) {
        return true 
    }
    return null
} // What is the type value of the return of this function? 
type Returns = string | null 

const something = (a: string, b: number) => {
    return a || b
} // same thing; the data returned can be either one; so it's a union

// Try and design programs so arrays have all the same type! TS will only allow 
// union data types in an array if you explicitly tell it to

let bb = [1, 'a'] // (string | number)
// readonly arrays - immutable

//* null - absence of value
//* undefined - variable that hasn't been given a value yet
//* void - function that doesn't have a return statement
//* never - function that doesn't return ever

// TypeScript's error codes are very specific, and easy to google!

// skip this with students
const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
}

function flip(f: Flippable){
    return 'flipped it'
}

flip(Flippable.Chair)
// flip(12)

// Enums not a recommended way of using TS
