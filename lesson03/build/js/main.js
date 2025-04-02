"use strict";
// we cannot do this with an interface
// interface PostId = stringOrNumber
//Think of interface as objects or classes
//Think of types as an alias of any type of typescript types we might assign
// Literal types
let myName;
// myName = "John", myName is of type "Dave", I can only set it to dave
let userName;
userName = "Amy";
userName = "Dave";
userName = "John";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
logMsg(add(4, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
//     (a: number, b: number) : number
// }
let multiply = function (a, b) {
    return a * b;
};
let division = (a, b) => {
    return a / b;
};
logMsg(multiply(2, 2));
// optional parameters
//If you have an optional parameter, it needs to be the last in the list, your required parameters are to come first
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
// if c is not explicitly supplied, it will be equal to 2
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// logMsg(sumAll(3)) wrong
logMsg(sumAll(undefined, 3)); // correct
//default values will not work in type mathFunction
// Rest Parameters
// the rest parameters should always come at the end, all of the other equired ones should come at the beginning
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 1, 2, 3, 4));
//never type
//explicity for functions that throws errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//This is an infinite loop, so typescript infers that the return type is never
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Adding break here changes the return type from never to void
// When you see that typescript infers type never, you probably want to throw an error because there is an infinite loop in your code
//When can this never type actually be useful
//Let look at how typescript thinks about things
//Custome Type Guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//Use of the never Guard
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
//Type Assertions or Type Casting
