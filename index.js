// Iteration 1: Names and Input
const hacker1 = 'Stanis';
const hacker2 = 'Stanislav';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length >= hacker2.length) {
  console.log(
    `The drive has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length <= hacker2.length) {
  console.log(
    `It seems that navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
const driver = hacker1.length;
const navigator = hacker2.length;

let driverUpper = '';
let reverseNav = '';

for (let i = 0; i < driver; i++) {
  driverUpper += hacker1[i].toUpperCase() + ' ';
}

console.log(driverUpper);

for (let i = navigator - 1; i >= 0; i--) {
  reverseNav += hacker2[i];
}

console.log(reverseNav);

let check;

for (let i = 0; i < driver; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("The navigator's name goes first");
    break;
  } else if (hacker1[i] === hacker2[i] && driver === navigator) {
    check = true;
  }
}

if (check === true) {
  console.log('What? You both have the same name?');
}
