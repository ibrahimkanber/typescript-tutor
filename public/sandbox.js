"use strict";
//explicit types
let character;
let age;
//arrays
let ninjas;
//union types
let mixed = ["ibo"];
let uid;
uid = 5;
// objects
let ninjaOne;
ninjaOne = { name: 'ibo' };
ninjaOne = { age: 29 };
//---!!! arrays are also kind of object
ninjaOne = [];
console.log("test");
//FUNCTIONS
let greet;
greet = () => { console.log("helloo"); };
const add = (a, b, c = 10) => {
    console.log('test');
    return a + b;
};
add(5, 7);
///FUNCTION SIGNATURE
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    return numOne - numTwo;
};
