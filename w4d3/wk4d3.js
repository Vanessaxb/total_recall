//maybe copy here previous examples

//*Part II: JavaScript Reps
//* Easy Going - Write a for loop that will log the numbers 1 through 20.
for (let number = 1; number <= 20; number++) {
    console.log(number);
}

//*Get Even - Write a for loop that will log only the even numbers in 0 through 200.
for (i = 0; i <= 200; i++) {
    if (i % 2 == 0){
    console.log(i);
}
}

//*Fizz Buzz
for (let fb = 1; fb <= 100; fb++) {
  if (fb % 3 === 0 && fb % 5 === 0) {
      console.log('FizzBuzz');
  } else if (fb % 3 === 0) {
      console.log('Fizz');
  } else if (fb % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(fb);
  }
}
//The commit message should read: "Fizz Buzz answered"

//*Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2, 1, 5001);
console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.splice(3, 1, "Gotham City");
console.log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

// The commit message should read: "Wild Wild Life answered"

//*Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for( let turtle of ninjaTurtles) { //goes through the legth of the array
         
  console.log(turtle.toUpperCase());
}

//*Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
favMovies.sort(); //alphabetically order
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Guardians of the Galaxy");
console.log(favMovies.indexOf("Django Unchained")); // find index of "Django Unchained" wihtout counting
favMovies.splice(15,1, "Avatar");
console.log(favMovies.length);//19
const newMovieList = favMovies.slice(10);
console.log(newMovieList);
console.log(favMovies);

console.log(favMovies.indexOf("Django Unchained"));// logs -1 from item removed from Array



// //*Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);// deleted "Eggbert"
console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

//*Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (rep = 1; rep <= 20; rep++) {
        if (rep % 2 == 0) {
        const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
        let meow = Math.round(Math.random()* 2);
            
        console.log(kittyTalk[meow]);
    } else {
        console.log('Love me, pet me! HSSSSSS!');
    }
}
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", 
//or "...why does the red dot always get away..." at random.

//* Find the Median
//ind the median number in the following numsarray, then console.log that number.
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
console.log(nums[Math.floor((nums.length) / 2)]);

//* Hungry for More?
//* Return of the Closets
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
  // add Kristyn's lost shoe to Thom's accessories array.
  const kristynsShoe = kristynsCloset[0];
  console.log(kristynsShoe);
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);

  // Dress up - 3 random outfits each
  for (let outfits = 0; outfits <= 2; outfits++) {
    let choice = Math.floor(Math.random()*5) 
        console.log(`Krystyn will be wearing ${kristynsCloset[choice]} and ${kristynsCloset[(choice+1)]} today`);
  }

  for (let item = 0; item < thomsCloset.length; item++) {
    console.log(`Thom will be wearing ${thomsCloset[0][item]}, ${thomsCloset[1][item]} and ${thomsCloset[2][item]}`);
  }

  //* Dirty Laundry
  // log the sentence "WHIRR: Now washing (item)" for each item in  Kristyn's closet.
  for (let dirty = 0; dirty <= kristynsCloset.length-1; dirty++){
    console.log(`"WHIRR: Now washing ${kristynsCloset[dirty]}`);
  }

//*Inventory
//Using bracket notation, log the arrays containing all of Thom's shirts, 
//pants, and accessories.

console.log(`Thom's Shirts: ` + thomsCloset[0]);
console.log(`Thom's Pants: ` + thomsCloset[1]);
console.log(`Thom's Accessories: ` + thomsCloset[2]);


const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE


 for (let i = 0; i < increaseByTwo.length; i++){
  increaseByTwo[i] += 2
}

console.log(increaseByTwo);