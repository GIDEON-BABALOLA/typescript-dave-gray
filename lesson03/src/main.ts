
//Type Aliases
//like creating your own types
type stringOrNumber = string | number
//So if we are using string | number anywhere in our application
//we can just use stringOrNumber
type stringOrNumberArray = (stringOrNumber)[]
type Guitarist   = {
    name:string,
    active?:  boolean, // active property is not required
    albums: stringOrNumberArray
    }
type UserId = stringOrNumber
// we cannot do this with an interface
// interface PostId = stringOrNumber
//Think of interface as objects or classes
//Think of types as an alias of any type of typescript types we might assign

// Literal types
let myName: "Dave"
// myName = "John", myName is of type "Dave", I can only set it to dave
let userName: "Dave" | "John" | "Amy"
userName = "Amy"
userName = "Dave"
userName = "John"

// functions
const add = (a: number, b: number): number => {
    return a + b
}
const logMsg = (message: any): void => {
    console.log(message)
}
logMsg("Hello!")
logMsg(add(2, 3))
logMsg(add(4, 3))

let subtract = function (c: number, d:  number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction{
//     (a: number, b: number) : number
// }
let multiply: mathFunction = function(a, b){
    return a * b
}
let division: mathFunction = (a, b) => {
    return a / b
}
logMsg(multiply(2, 2))

// optional parameters
//If you have an optional parameter, it needs to be the last in the list, your required parameters are to come first
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== "undefined"){
    return a + b + c
    }
    return a + b
}
// default param value
// if c is not explicitly supplied, it will be equal to 2
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}
logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
// logMsg(sumAll(3)) wrong
 logMsg(sumAll(undefined, 3)) // correct
 //default values will not work in type mathFunction

 // Rest Parameters
 // the rest parameters should always come at the end, all of the other equired ones should come at the beginning
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(1, 1, 2, 3, 4))

//never type
//explicity for functions that throws errors
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}
//This is an infinite loop, so typescript infers that the return type is never
const infinite = () => {
    let i: number = 1
    while(true){
        i++
        if( i > 100) break
    }

}
// Adding break here changes the return type from never to void
// When you see that typescript infers type never, you probably want to throw an error because there is an infinite loop in your code





//When can this never type actually be useful
//Let look at how typescript thinks about things

//Custome Type Guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}
//Use of the never Guard
const numberOrString = (value: number | string): string => {
    if(typeof value === "string") return "string"
    if(isNumber(value)) return "number"
    return createError("This should never happen!")
}

//Type Assertions or Type Casting