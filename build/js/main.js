"use strict";
// lesson three
// Arrays
let stringArr = ['one', 'two', 'hello'];
let guitarts = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 198, false, null, undefined];
stringArr[0] = '123123';
// stringArr.push(false)
console.log('stringArr = ', stringArr);
guitarts.push(12313132);
mixedData.push(false, 1231);
console.log('mixedData = ', mixedData);
let arr = [];
let bands = [];
bands.push('hello', 'shit');
console.log('bands = ', bands);
// Tuple spcial postition spicial type
let myTuple = ['dave', 123, false];
// union types
let mixed = ['jhone', 1, false];
// myTuple = mixed
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "Dabe",
    prop2: true
};
const jp = {
    name: "Jimmy",
    albums: [1]
};
const evh = {
    albums: [1, 2, 3]
};
const greetGuitarist = (guitarts) => {
    // type narrow
    if (guitarts.name) {
        return `Hello ${guitarts.name.toUpperCase()}`;
    }
    return 'Hello threre!';
};
console.log('with name = ', greetGuitarist(jp));
console.log('without name = ', greetGuitarist(evh));
