function square(num: number): number{
    return num * num;
}
const doSomething = (person: string, age: number, isFunny: boolean) => {


};

doSomething("ChickenFace", 76, false);

// Default value goes after parameter type
function greet(person: string = "stranger"):string{
    return `Hi there, ${person}!`;
}


// Function Return Types:
// : <type> right before the function body.

function rando(num: number): string | number{
    /*
    This function could return a string or number.
    */
    if (Math.random() < 0.5){
        return num.toString();
    }
    return num;
}
const add = (x: number, y: number): number => {
    return x + y;
}

const colors = ["red","orange","yellow"];
colors.map(color => { // Typescript knows that color is going to be a string from contextual typing
    return color.toUpperCase()
});

function printTwice(msg: string): void{ 
    console.log(msg);
    console.log(msg);
}


function makeError(msg: string): never{
    throw new Error(msg); // Function will stop executing after this point, however TypeScript "infers" a return type of void.
}


function gameLoop(): never{
    // Also this function never returns.
    while(true){
        console.log("GAME LOOP RUNNING!");
    }
}