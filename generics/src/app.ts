// Code goes here!

// const names = ['max', 'manuel'];
// const anyArray = [];
// const genericArray: Array = [];

const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!');
    }, 500)
});

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}

console.log(merge({ name: 'max' }, { age: 29 }));


const mergedObj = merge({ name: 'max' }, { age: 29 });

mergedObj.age;

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'got' + element.length + ' elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'got' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');


class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('erik');

let objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'erik' });
objStorage.removeItem({ name: 'Manu' });
console.log(objStorage.getItems());

const numberStorage = new DataStorage<number>();

objStorage = new DataStorage<object>();
objStorage.removeItem({ name: 'Manu' });
console.log(objStorage.getItems());


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
    return { title: title, description: description, completeUntil: date };
}



