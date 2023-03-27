let username = 'Bob'
console.log(username)

let a:number = 1
// let b:string = '6'
let c:number = 2

// console.log(a/b)
// console.log(b*c)

// implicit typing 没有明确的指明类型，TS会自动推断类型
const myname = 'Dave'
// explicit typing
const yourname:string = 'Bob'
let hisname:string;
hisname='Tom'

let meanmingOfLife:number;
let isLoading:boolean;
meanmingOfLife = 41
isLoading = true
// any is not type checking ,defeat JavaScript.
// union type
let album:string|number;
album = '12312312'
album = 123123

const sum = (a:number,b:number) => a+b
// union type
let postId:string|number;
let isActive:number|boolean;

let re:RegExp = /\w+/g