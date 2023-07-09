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
