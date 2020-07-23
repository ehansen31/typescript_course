function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log('constructor');
    }
}

function WithTemplate(template: string, hookId: string) {
    return function <T extends { new(...args: any[]): {} }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                }
            }
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1> My Person Object</h2>', 'app')
class Person {
    name = 'Erik';
    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('invalid numba');
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}











































