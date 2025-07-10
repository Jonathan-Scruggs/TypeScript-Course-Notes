function triple(value: number | string){
    
    if (typeof value === "string"){
       return value.repeat(3)
    }
    // Only way we make it to this point is if value is a number
    return value * 3
}   

const el = document.getElementById("idk")
if (el){
    // Truthy so its not null inside this scope.
    
} else {
    el
}

const printLetters = (word: string | null) => {
    if (word){
        for (let char of word){
            // Can iterate over word since we did a truthy check to verify its not undefined/null
        }
    }
}

function someDemo(x: string | number, y: string | boolean){
    if (x === y) {
        x.toUpperCase()

    }
}
someDemo(3,"3")

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(x: TVShow | Movie): number{
    if ("episodeDuration" in x){
        return x.episodeDuration * x.numEpisodes
    }
    return x.duration
}

function printFullDate(date: string | Date){
    if (date instanceof Date){
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }

}

class User {
    constructor(public username: string){

    }
}
class Company{
    constructor(public name: string){}
}

function printName(entity: User | Company){
    if (entity instanceof User){
        console.log(entity.username)
    } else {
        console.log(entity.name)
    }
}


interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat{
    return (animal as Cat).name !== undefined
}

function makeNoise(animal: Cat | Dog): string{
    if (isCat(animal)){
        // TypeScript knows its a Cat at this point
        return "Meow"
    } else {
        // TypeScript knows its a Dog at this point.
        return "Woof"
    }
}

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}
interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}
interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "OINK!";
        case("cow"):
            return "MOO!";
        case("rooster"):
            return "Cockadoodledoo!";
        case "sheep":
            return "Baaa!";
        default:
            // We should never make it here, if we handled all cases correctly 
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}
console.log(getFarmAnimalSound(stevie))