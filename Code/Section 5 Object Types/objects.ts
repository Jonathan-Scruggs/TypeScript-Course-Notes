/*
This function expects a object called person. This object has a first property 
which is of type string.
*/


function printName(person: {first: string, last: string}): void{
    console.log(`${person.first} ${person.last}`);
}
// Now if we try to pass a empty object to the function it will say object 
// is missing certain properties
printName({first: "Jonathan", last: "Jenkins"})  

// let coordinate: { x:number, y: number} = {x: 34, y: 2}; // Coordinate has a type 
// // The object that is returned by the function
// function randomCoordinate(): {x: number, y:number}{
//     return {x: Math.random(), y: Math.random()};
// }


/*
Generally, if you have a object stored in a variable that a function uses.
TypeScript only checks if the properties needed are present. Excess properties are ignored
*/
const singer = {first: "Mick", last: "Jagger", age:473, isAlive: true};
printName(singer); 

// type Point = {
//     x: number;
//     y: number;
// }

// let coordinate: Point = {x: 34, y: 2}; // Coordinate has a type of Point

// function randomCoordinate(): Point{
//     return {x: Math.random(), y: Math.random()};
// }

// function doublePoint(point: Point): Point{
//     return {x:point.x *2, y: point.y * 2}
// }
type Song = {
    title: string, 
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }   
}


function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033; 
}
function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`);
}
const mySong: Song = {
    title: "Unchained Melody",
    artist : "Righteous Borthers",
    numStreams: 123234543252,
    credits: {
        producer: "Phile Spector",
        writer: "Alex North"
    }
}

calculatePayout(mySong)
printSong(mySong)



type Point = {
    x: number;
    y: number;
    z?: number;
};
const myPoint: Point = {x: 1, y: 3};

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 12837,
    username: "catgurl"
}
console.log(user.id)

type Circle = {
    radius: number;
}
type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}
type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}