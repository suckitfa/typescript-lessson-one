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

//     public getAge() {
//         return this.age
//     }
// }

// // const Dave = new Coder('Dave','Country',122,'TypeScript')
// // console.log('name = ',Dave.name)
// // console.log('age = ',Dave.getAge())
// // console.log('age = ',Dave.lang)


// class WebDev extends Coder {
//     constructor(
//         public computer:string,
//         name:string,
//         music:string,
//         age:number
//     ) {
//         super(name,music,age)
//         this.computer = computer
//     }

//     public getLang() {
//         // protected prop only access in the class and its sub-class
//         return `I write ${this.lang}`
//     }
// }
// // const webdev = new WebDev('Mac Book','Bob','Rock',19)
// // console.log('webdev = ',webdev.getAge())
// // console.log('typeof = ',typeof webdev)
// // console.log(webdev instanceof WebDev)
// // console.log(webdev instanceof Coder)

// const Sara = new WebDev('Mac','Sara','Lofi',20)
// console.log(Sara.getLang())

interface Musician {
    name:string;
    instrument:string;
    play(action:string):string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(name:string,instrument:string) {
        this.name = name;
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} ${this.instrument}`
    }   
}

const Page = new Guitarist('Jimmy','guitar')
console.log(Page.play('strums'))
// --------
class Peeps {
    static count:number = 0

    static getCount():number {
        // this is important
        return Peeps.count;
    }

    public id:number
    constructor(public name:string) {
        this.name = name;
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')
console.log(Peeps.count)
console.log(John.id)
console.log(Steve.id)
console.log(Amy.id)

class Bands {
    private dataState:string[]
    constructor() {
        this.dataState = []
    }

    // speical key words!!
    public get data(): string[]{
        return this.dataState
    }

    public set data(value:string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
        } else throw new Error('Param is not an array of strings')
    }
}
const MyBands = new Bands()
MyBands.data = ['Neil oung','Led Zep']
console.log('mybands = ',MyBands.data)
MyBands.data = [...MyBands.data,'TF Girls']
console.log('mybands = ',MyBands.data)
