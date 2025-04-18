"use strict";
let stringArray = ["one", "hey", "Dave"];
let guitars = ["strat", "Les Paul", 1234];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "John";
stringArray.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
// stringArray = guitars This won't work
guitars = stringArray;
mixedData = guitars;
let test = [];
let bands = [];
console.log(typeof bands);
bands.push("Van Halen");
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// myTuple = mixed Here typescript understands that there is a possibility that the source mixed may not have only three elements
//Objects 
//Typescript has no problems here because an array is also an object in javascript
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// exampleObj.prop2 = 42  here prop2 is locked in to that boolean data
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1983, "Ou", "dave"]
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
let DP = {
    name: "profile",
    active: true,
    albums: ["A", "BB", "CCC"]
};
let David = {
    name: "david",
    active: true,
    albums: ["AZ", "BEST"]
};
evh = JP;
evh = DP;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
const greetPianist = (pianist) => {
    //  return `Hello ${pianist.name?.toLowerCase()}`
    //or use narrrowing
    if (pianist.name) {
        return `Hello ${pianist.name.toUpperCase()}`;
    }
    return `Hello`;
};
console.log(greetPianist(David));
console.log(greetGuitarist(JP));
// evh.years = 40 We can't just add another property because it does not exist on the Guitarist type that was pre drfined
//Enums
//A quote from TypeScript Documentation
// "Unlike" most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
