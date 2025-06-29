let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle.toUpperCase()

// Number
let numCatLives: number = 9;
numCatLives += 1;

// Boolean
let gameOver: boolean = false;
gameOver = true;


// Type Inference:
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";


let isFunny = false;
isFunny = true;




// the any type

let thing: any = "hello"
// now we can make it a number
thing = 1;
thing = false;
thing(); // Calling a function and its not going to complain.
// Or we can call a method that doesn't exist for the variable
thing.toUpperCase(); //



const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string; // If we don't add an annotation to the declaration then Typescript infers its of type 'any'.
// (Implicit Any)
for (let movie of movies){
    if (movie == "Amadeus"){
        foundMovie = movie;
    }
}