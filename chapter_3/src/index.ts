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
