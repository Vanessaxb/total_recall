/*
A. Q + A
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking 
about how you're going to solve a 
problem vs actually typing in code to solve it?
*/

//*B. Strings
let firstVariable = "Hello World"
firstVariable = 15
let secondVariable = firstVariable;
secondVariable = 'Happy';
console.log(secondVariable);
console.log(firstVariable);
let yourName = 'Vanessa';
console.log(`Hello, my name is ${yourName}`);

//*C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false) //*I dont understand this
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  //* D. The farm
  const animal= "co"
  if (animal === "cow") {console.log('moooo');
    } else {
      console.log("Hey! You're not a cow.");  
    }