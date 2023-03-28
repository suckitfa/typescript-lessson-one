// lesson three

// import { isStringLiteralOrJsxExpression } from "typescript"

// Arrays
let stringArr = ['one','two','hello']
let guitarts = ['Strat','Les Paul',5150]
let mixedData = ['EVH',198,false,null,undefined]
stringArr[0] = '123123'
// stringArr.push(false)
console.log('stringArr = ',stringArr)

guitarts.push(12313132)
mixedData.push(false,1231)
console.log('mixedData = ',mixedData)

let arr = []
let bands:string[] = []
bands.push('hello','shit')
console.log('bands = ',bands)

// Tuple spcial postition spicial type
let myTuple:[string,number,boolean] = ['dave',123,false];
// union types
let mixed = ['jhone',1,false]
// myTuple = mixed

let myObj:object
myObj = []
console.log(typeof myObj)

const exampleObj = {
    prop1:"Dabe",
    prop2:true
}

// create an type called Guitaris
// type Guitarist = {
//     name:string;
//     // optional props
//     active?:boolean;
//     albums:(string|number)[];
// }

// let evh: Guitarist = {
//     name:'Eddie',
//     active:false,
//     albums:[1983,4123,'OU*12']
// }

// let jp: Guitarist = {
//     name:"Jimmy",
//     active:true,
//     albums:['I',"II","IV"]
// }

// pass it to a func
// const greetGuitarist = (guitarts: Guitarist) => {
//     return `Hello ${guitarts.name}!`
// }

// console.log(greetGuitarist(jp))

// interface
interface Guitaris {
    name?:string;
    active?:boolean;
    albums:(number|string)[]
} 

const jp: Guitaris  = {
    name:"Jimmy",
    albums:[1]
}

const evh:Guitaris = {
    albums:[1,2,3]
}

const greetGuitarist = (guitarts: Guitaris) => {
    // type narrow
    if(guitarts.name) {
        return `Hello ${guitarts.name.toUpperCase()}`
    }
    return 'Hello threre!'
}
console.log('with name = ',greetGuitarist(jp))
console.log('without name = ',greetGuitarist(evh))

// Eums: something added to the lang and runtime
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}
console.log(Grade.A)

// type alias
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]
type Guitaris2 = {
    name?:string;
    active:boolean;
    albums:stringOrNumberArray;
}
type UserId = stringOrNumber;

// Literal types
let davename:'Dave' = 'Dave'
let userName:'Dave'|'Jhone'|'Amy';
userName = 'Dave'

// functions
const add = (a:number,b:number):number => {
    return a + b;
}

const logMsg = (message:any) => {
    console.log(message)
}
logMsg('hello wolrd')
logMsg(false)
logMsg('sdf')

let subtract = function(c:number,b:number):number {
    return a - b;
}

// create a func signature
type mathFunc = (a:number,b:number) => number
const mutiply:mathFunc = (a,b) => a*b;
// 使用接口定义函数
interface ImathFunc {
    (a:number,b:number):number;
}
const divide:ImathFunc = (a,b) => a/b;

// optionals params comes the last
const addAll = (a:number,b:number,c?:number):number => {
    // type guard
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b ;
}
// default params value
const sumAll = (a:number = 2,b:number,c:number = 0):number => {
    return a + b + c;
}

logMsg(sumAll(undefined,2,3))

// reset params
const totalAll = (...nums:number[]):number => {
    return nums.reduce((prev,cur) => prev+cur)
    // return nums.reduce((acc,cur) => acc + cur)
}
logMsg(totalAll(1,2,3,4,5,6,7,8,9,10))
logMsg(totalAll(1))

// never type
const createError = (errMsg:string):never => {
    throw new Error(errMsg)
}
// void type
const infinite = () => {
    let i = 1
    while(true) {
        i++
        if(i > 100) break;
    }
}
// custom type guard
const isNumber = (value:any):boolean => {
    return typeof value === 'number' ? true : false
}
// use of the never type
const numberOrString = (value:number|string):string => { 
    // type guard
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'
    return createError('This should never happen!')
    // 还有一条分支是undefined
}
numberOrString('')

// type assertion or type casting
type One = string
type Two = string | number
type Three = 'hello'
// convert to more or less specific
let somea:One = 'hello'
let b = a as Two
let somec = somea as Three;

let d = <One> 'world'
let e = <string|number> 'word'

const addOrConcat =  (a:number,b:number, c:'add' | 'concat'):number|string => {
    if(c === 'add') {
        return a + b;
    } else {
        return '' + a + b + c;
    }
}
let myval:string = addOrConcat(1,2,'concat') as string
// Be careful! TS sees no problem here - but a string is returned;
let nextval:number = addOrConcat(1,23,'concat') as number

// unkonw 
// 10 as string

// the DOM
// 原来感叹号是非null和非undefined的类型断言
const img = document.querySelector('.img')!
const myimg = document.querySelector('#img') as HTMLImageElement
// will not work in JSX file.
const nextImg  = <HTMLImageElement>document.getElementById('#img');
(img as HTMLImageElement).src = 'http://baiduc.com'