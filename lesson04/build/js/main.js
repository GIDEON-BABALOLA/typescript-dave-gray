"use strict";
// convert to more or less specific
let a = "hello";
let b = a; //less specific type
let c = a; // more specific
let d = "world"; //Dosen't work in tsx
let e = "world";
//These angle brackets cannot be used in tsx files that I will use in react. for example
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b; //coarse them so they become a string
};
// Here we are using type asssertions because typescript does not know if it is meant to return a string,
//but I know because of the concat that it will return a string
let myVal = addOrConcat(2, 2, "concat");
//Be careful! TS sees no problem - but a string is returned
// Here I am telling typescript that I know better than it and I am making a mistake, limitations of type assertions.
let nextVal = addOrConcat(2, 2, "concat");
// TypeScript will check assertions when it can
// 10 as string
//Where assertions can be very useful
// The DOM
const img = document.querySelector("img"); // non null assertion, we are saying that this is not null, typescript already infers that this is an image element 
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img"); // Remember that this does in react tsx files
img.src;
myImg.src;
console.log(typeof (10 + ""));
