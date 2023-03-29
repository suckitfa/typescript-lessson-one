"use strict";
// lesson three
// import { isStringLiteralOrJsxExpression } from "typescript"
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
// Eums: something added to the lang and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
// Literal types
let davename = 'Dave';
let userName;
userName = 'Dave';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello wolrd');
logMsg(false);
logMsg('sdf');
let subtract = function (c, b) {
    return a - b;
};
const mutiply = (a, b) => a * b;
const divide = (a, b) => a / b;
// optionals params comes the last
const addAll = (a, b, c) => {
    // type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default params value
const sumAll = (a = 2, b, c = 0) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 2, 3));
// reset params
const totalAll = (...nums) => {
    return nums.reduce((prev, cur) => prev + cur);
    // return nums.reduce((acc,cur) => acc + cur)
};
logMsg(totalAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
logMsg(totalAll(1));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// void type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    // type guard
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen!');
    // 还有一条分支是undefined
};
numberOrString('');
// convert to more or less specific
let somea = 'hello';
let b = a;
let somec = somea;
let d = 'world';
let e = 'word';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return '' + a + b + c;
    }
};
let myval = addOrConcat(1, 2, 'concat');
// Be careful! TS sees no problem here - but a string is returned;
let nextval = addOrConcat(1, 23, 'concat');
// unkonw 
// 10 as string
// the DOM
// 原来感叹号是非null和非undefined的类型断言
const img = document.querySelector('.img');
const myimg = document.querySelector('#img');
// will not work in JSX file.
const nextImg = document.getElementById('#img');
img.src = 'http://baiduc.com';
