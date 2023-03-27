// lesson three
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