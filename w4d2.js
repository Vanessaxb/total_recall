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


//*E. Driver's Ed
 let age = "17";
 if (age >= 16) {
    console.log("Here are the keys!");
 } else {
    console.log("Sorry, you're too young.");
 }
 
 //*II. Loops
 //*A. The basics
//  1.print 0 to 10 inclusive
for (let number = 0; number <= 10; number++) {
console.log(number); 
}
// 2. print 10 up including 400
for (let numb = 10; numb <= 400; numb++) {
    console.log(numb);
}
// 3. print out every third number starting with 12 and going no higher than 4000
for (let num = 12; num <= 4000; num+=3) {
    console.log(num);
}

//* B. Get even
// 1. Print out even numbers within the range of 1 - 100
for (let par = 1; par <= 100; par++) {
    if (par % 2 == 0) {console.log(par);}
}
//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let par = 1; par <= 100; par++) {
    if (par % 2 == 0) {console.log(`${par} is an even number`);
}
}

//* C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let x = 3; x <= 100; x++) {
    if ( x % 3 ==0 && x % 5 == 0) {
        console.log(`I found a ${x}. High Five! Three is a crowd`);

} else if (x % 3 == 0) {
        console.log(`I found a ${x}. Three is a crowd`);
    } else {
    if (x % 5 == 0) {
        console.log(`I found a ${x}. High five! `);  }
}
}

//*D. Savings account
// 1. sum numbers from 1-10
let bank_account = 0;
for (let y = 1; y <= 10; y++) {
    bank_account = y + bank_account;
   console.log(bank_account);}
// 2. sum of all the numbers between 1 - 100 multiplied by 2
let raise = 0;
for (let pay = 1; pay <= 100; pay++) {
    raise = raise + (pay * 2);
    console.log(raise);
}

//* III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?

//*B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["Life is beautiful", "We're young", "Live in love"];
console.log(quotes);

//* C. Accessing elements
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); // acess 1st element
randomThings[2] = "World"; // change Hello to World
console.log(randomThings);

//* D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2]); // access the third element
ourClass.splice(4, 1, "Octocat"); // change "github" to "Octocat"
console.log(ourClass);
ourClass.push("Cloud City") // add "Cloud City" 
console.log(ourClass);

//* E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon")// added Aegon
myArray.push("Twelve") // added Twelve
console.log(myArray);
myArray.shift(1); // removed 5
console.log(myArray); 
myArray.unshift("Bob Marley"); // added Bob Marley to the beginning
console.log(myArray); 
myArray.pop(); // removed last string
console.log(myArray); 
myArray.reverse(); // reversed array
console.log(myArray); 


//* F. Biggie Smalls
let increment = 150;
if (increment < 100) {console.log('little number');
} else {
    console.log('big number');
}

//* G. Monkey in the Middle
let entered = 7;
if (entered < 5) {console.log('little number');
} else if (entered > 10) {
    console.log('big number');
} else {
    console.log('monkey');
}

//*H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1 access Kristyn's 3rd item
 console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2 added rayban after yellow knit hat
kristynsCloset.splice(6, 0, "rayban");
console.log(kristynsCloset);
// 3 changed yellow hat to "stained knit hat"
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);
//4 acess Thom's 1st element
console.log(thomsCloset[0][0]);
// 5 any item from Thom's pants
console.log(thomsCloset[1][1]);
// 6 any of Thoms accessories
console.log(thomsCloset[2][1]);
// 7 log sentence with what Thom is wearing
console.log(`Thom is looking fierce in a ` + thomsCloset[0][0] + `, ` + thomsCloset[1][1] + ` and ` + thomsCloset[2][1] + `!`);
// 8 change Thom's PJ to Footie Pajamas
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

