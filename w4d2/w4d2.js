/*
//* A. Q + A
//*How do we assign a value to a variable?
Using let or const, you can assign a value to a variable using the = operator
when you declare it or after the declaration and before accessing it.

//*How do we change the value of a variable?
Once you declare a variable and assign it a value, your program can manipulate what's
stored in the variable as it run

//*How do we assign an existing variable to a new variable?
Using the assignment operator (`=`), you can assign a new value to it, 
or perform operations and update its current value.

//*Remind me, what are declare, assign, and define?
To declare is to create a variable, function, object, or array with proper syntax. To assign is to assign that declaration 
to a value, to define is to create that value.

//*What is pseudocoding and why should you do it?
It is used for creating an outline or a rough draft of a program.
System designers write pseudocode to ensure that programmers understand a software project's 
requirements and align code accordingly.
//*What percentage of time should be spent thinking 
about how you're going to solve a 
problem vs actually typing in code to solve it?
My guess is 70% thinking vs 30% coding
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

//*C. Booleans ssssss
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


//* IV. Functions


//*A. printGreeting
function printGreeting(name) {console.log(`Hello there, ${name}!`);}
printGreeting("John");

//*B. printCool
function printCool(name) {console.log(`${name} is cool`);}
printCool("Mark");

//*C. calculateCube
function calculateCube(number) {
    return number ** 3;}
    console.log(calculateCube(5));

//??? other way of doing it// cant do it?????
// function calculateCube(number1) {
// Math.cube(number1)}
// console.log(calculateCube(5));

//*D. isVowel
// function isVowel('') { }
function isVowel(letter) {
    return (letter.toUpperCase() === "A") || (letter.toUpperCase() === "E") || (letter.toUpperCase() === "I") || (letter.toUpperCase() === "O") || (letter.toUpperCase() === "U");
}

console.log(isVowel("e"));


//*E. getTwoLengths
function getTwoLengths(string1, string2) {
    // const array1 = []
    return [string1.length, string2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


//*F. getMultipleLengths ??? I cant do it. Dont understand map(function(str))
function getMultipleLengths(arr) {
    const lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);}
    return lengths};
// }

//     return arr.map(function(arr){ // I dont understand this line
//         return arr.length;
//     });
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//*G. maxOfThree
function maxOfThree(numb1, numb2, numb3) {
    if (numb1 == numb2 == numb3){
        return numb1
    } else if (numb1 >= numb2 && numb1 >= numb3) {
        return numb1
    } else if (numb2 >= numb1 && numb2 >= numb3) {
        return numb2
    } else if (numb3 >= numb2 && numb3 >= numb1) {
        return numb3}    
}
console.log(maxOfThree(10, 9, 150));

//*H. printLongestWord // dont understand why keeps giving undefined
function printLongestWord (arrString) {
    let word = '';
    for (let j = 0; j < arrString.length; j++) {
        if(arrString[j].length > word.length) {
            word = arrString[j];}
  } 
  console.log(word);
}
console.log(printLongestWord(["BoJacky", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



//*Objects
//* A. Make a user object
const user = {name: 'Ana', 
email: 'test@a.com', 
age: '23', 
purchased:[]}

//*B. Update the user
user.email = 'newemail@a.com';
user.age++;

//*C. Adding keys and values
user.location = 'NYC';
console.log(user);

//*D. Shopaholic!
//1 push "carbohydrates" to the purchasedarray.
user.purchased.push('carbohydrates');
console.log(user);
//2 push "peace of mind" to the purchasedarray.
user.purchased.push('peace of mind');
console.log(user);
//3 push "Merino jodhpurs" to the purchasedarray.
user.purchased.push('Merino jodhpurs');
//4 console log just merino
console.log(user.purchased[2]);

//*E. Object-within-object
//1 add friend object within object
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "CA",
    purchased: []
}
//2 log friend's name
console.log(user.friend.name);
//3 log friend's location
console.log(user.friend.location);
//4 CHANGE the friend's age to 55
user.friend.age = '55';
console.log(user.friend.age);
//5 push ring to purchased
user.friend.purchased.push('The One Ring');
//6 .push()to add "A latte" to the friend's purchased
user.friend.purchased.push('A latte');
//7 log a latte only
console.log(user.friend.purchased[1]);

//*F Loops
//1 for loop that iterates over the User's purchased array
for (let item in user.purchased) {
    console.log(`${user.purchased[item]}`);
}
//2 for loop that iterates over the Friend's purchasedarray
for (let item in user.friend.purchased) {
    console.log(`${user.friend.purchased[item]}`);
}

//*G Functions can operate on objects
/*1 Write a single function updateUserthat takes no parameters. 
When the function is run, it should: it should increment the 
user's age by 1 make the user's name uppercase */

let updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase()
}
updateUser(user)
console.log(user);
//2 
let oldAndLoud = (person) => {
    person.age++
    person.name = person.name.toUpperCase()

}

// console.log(oldAndLoud(user)); //* why it gives me undefinied???

//* Cat Combinator
//1. Mama cat
const cat1 = {name: 'chino', breed: 'white', age: 2}
console.log(cat1.name);
console.log(cat1.age);

//2. Papa cat
const cat2 = { name: 'don', breed: 'orange', age: 4}

//3. Combine Cats!
function combineCats(mama, papa) {

    console.log(mama);
    console.log(papa);
}
combineCats(cat1, cat2)

//4. Cat brain bender //*why does it result in undefined
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2), combineCats(cat1, cat2)));





//*testing examples
// const flowers = ['peony', 'daffodil', 'marigold'];
 
// function addFlower(arr) {
//   arr.push('lily');
// }
 
// addFlower(flowers);
 
// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// let spaceship = {
//     crew: {
//     captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//         },
//     'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//         },
//     medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//         }
//     }
// }; 

// // Write your code below
// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// }