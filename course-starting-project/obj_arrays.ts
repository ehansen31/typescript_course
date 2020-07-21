function add(n1: number, n2: number, showResult: boolean) {
    if (showResult) {
        console.log(n1 + n2);
    } else {
        return n1 + n2;
    }
}

const number1 = 5 as number;
const number2 = 2.8;
const printResult: boolean = true;



const result = add(number1, number2, printResult);

console.log(result);


enum Role {
    ADMIN = 1,
    READ_ONLY = 2,
    AUTHOR = 3
}

const person: { name: string, age: number, hobbies: string[], role: [number, string] } = {
    name: 'erik',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [Role.AUTHOR, 'author']
};

let favoriteActivities: string[];








