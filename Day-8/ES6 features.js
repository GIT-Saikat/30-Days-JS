//Task 1
let name = "Saikat Mondal";
let age = 27;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

//Task 2
let example=`Hello welcome to VS code.
Here you will learn about coding.
Laguages include JSON,java,python etc`;
console.log(example);

//Task 3
let numbers = [10, 20, 30, 40, 50];
let [first, second] = numbers;
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

//Task 4
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
let { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

//Task 5
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray); 

//Task 6
function sum(...numbers){
    return numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
}
console.log(sum(1,2,3,4,5,6,7,8,9));

//Task 7
function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5,2));

//Task 8
const name1 = 'Enhanced Object';
const age1 = 2;

const enhancedObject = {
  name1,
  age1,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
console.log(enhancedObject);
enhancedObject.greet();

//Task 9
const propName = 'dynamicProperty';
const value = 'This is a computed property';

const computedObject = {
  [propName]: value
};
console.log(computedObject);



