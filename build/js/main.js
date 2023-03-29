"use strict";
// class Coder {
//     // 先不初始化这个
//     secondLang!:string
//     constructor(
//         public readonly name: string,
//         public  music:string,
//         private age:number,
//         protected lang:string = 'TypeScript'
//     ) {
//         this.name = name;
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
// --------
class Peeps {
    static getCount() {
        // this is important
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    // speical key words!!
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil oung', 'Led Zep'];
console.log('mybands = ', MyBands.data);
MyBands.data = [...MyBands.data, 'TF Girls'];
console.log('mybands = ', MyBands.data);
