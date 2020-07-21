// Code goes here!

const userName = 'erik';
// userName = '';


let age = 30;
age = 29;


if (age > 20) {
    var isOld = true;
}
// console.log(isOld);

// const add = () => { };
const add = (a: number, b: number) => a + b;


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    name: 'erik',
    age: 30
};

// const copiedPerson = person;
const copiedPerson = { ...person };

const addSpread = (...numbers: number[]) => {

};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { name: userFirstName, age: userAge } = person;





