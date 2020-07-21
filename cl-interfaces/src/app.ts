// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}



interface Named {
    readonly name: string;
    outputName?: string;
}

// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

interface Greetable extends Named {
    // readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable, Named {
    name: string;
    outputName?: string;

    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string) {
        return;
    }
}

// let user1: Greetable;
let user1: Person;
user1 = {
    name: 'erik',
    // age: 27,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};


























