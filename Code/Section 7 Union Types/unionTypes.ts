let age: number | string = 21; // Age can be a string or number
age = 23; 
age = "24";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 321.123, long: 23.43433}


function printAge(age: number | string): void{
    console.log(`You are ${age} years old`);
} 

function calculateTax(price: number | string, tax: number){
    // Type Narrowing
    if (typeof price === "string"){
        price = price.replace("$","")
        return parseFloat(price) * tax
    } 
    return price * tax
}

// Union Types and Arrays

const stuff: (number | string)[] = ["as", 1, 2, "Gerald"];

const coords: (Point | Loc)[] = [];
coords.push({lat: 321.123, long: 23.43433});
coords.push({x: 213, y: 342});


let zero : 0 = 0; // The variable zero is of type "zero"
// SO now if we try to change the value from something other than zero TypeScript will give an error.
 
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";


type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturady" | "Sunday"

let today: DayOfWeek = "Monday"