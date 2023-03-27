"use strict";
let username = 'Bob';
console.log(username);
let a = 1;
// let b:string = '6'
let c = 2;
// console.log(a/b)
// console.log(b*c)
// implicit typing 没有明确的指明类型，TS会自动推断类型
const myname = 'Dave';
// explicit typing
const yourname = 'Bob';
let hisname;
hisname = 'Tom';
let meanmingOfLife;
let isLoading;
meanmingOfLife = 41;
isLoading = true;
// any is not type checking ,defeat JavaScript.
// union type
let album;
album = '12312312';
album = 123123;
const sum = (a, b) => a + b;
// union type
let postId;
let isActive;
let re = /\w+/g;
