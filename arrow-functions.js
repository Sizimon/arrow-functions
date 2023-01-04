/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //code block 
//     return a + b
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum)
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //code block 
    return a + b
}

let sum = addTwoNumbers(3, 5);
console.log(sum)
// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello There!')

const sayHello = () => console.log('hello')
sayHello();


// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiple line string.
    </p>`
)

console.log(returnMultipleLines());

// Using a for loop

let nums = [1, 2, 3, 4, 5, 6];
let results = [];
for (let num of nums) {
    results.push(num * 2)
}
console.log(results);

// Using map

const multiplyByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified /w map 

const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplified /w map() + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow);

// With Objects 

const students = [
    {
        id: 1,
        name: "Mark",
        profession: "Developer",
        skill: "Javascript"
    },
    {
        id: 2,
        name: "Ariel",
        profession: "Developer",
        skill: "HTML"
    },
    {
        id: 3,
        name: "Jason",
        profession: "Designer",
        skill: "CSS"
    },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Spread operator 

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

