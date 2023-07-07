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
