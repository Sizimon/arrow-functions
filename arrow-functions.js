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

// Using .MAP()
//-------------------------------------

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
// ---------------------------

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected



// .FILTER() 
// ------------------------------

// Simple Filtering

const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const findPaul = people.filter(p => p.name === "Paul");
console.log(findPaul)

// Complex filtering

const studentsFilter = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            {name: 'javascript', yrsExperience: 1},
            {name: 'html', yrsExperience: 5},
            {name: 'css', yrsExperience: 3},
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            {name: 'javascript', yrsExperience: 0},
            {name: 'html', yrsExperience: 4},
            {name: 'css', yrsExperience: 2},
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            {name: 'javascript', yrsExperience: 1},
            {name: 'html', yrsExperience: 1},
            {name: 'css', yrsExperience: 5}
        ]
    },
];

const candidates = studentsFilter.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0
});
console.log(candidates);

// WRITTEN CLEANER
// const has5yearsExp = skill => skill.yrsExperience => 5;
// const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
// const candidates = studentFilter.filter(hasStrongSkills);
// console.log(candidates);

const names = candidates.map(n => n.name);
console.log(names);

// .REDUCE()
// ----------------------

// Summing an array of numbers 

const numbers  = [0, 1, 2, 3, 4];
let sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

// BREAKDOWN
// let sum = numbers.reduce((acc, curr) => {
//     console.log(
//         'Accumalator:': acc,
//         'Current Value:': curr,
//         'Total:': acc + curr,
//     );
//     return acc + curr;
// });
// console.log(sum);

const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5,
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7,
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1,
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3,
    }
];

// Totalling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totalling it too
// {Developer: 12, Designer: 4} <--- Goal
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    } 
    return acc;
}, {});

console.log(experienceByProfession);