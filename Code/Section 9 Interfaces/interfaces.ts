interface Point {
    x: number;
    y: number;
}
const pt: Point = {x: 123, y: 1234}

interface Person {
    readonly id: number; //readonly so can't be changed
    first: string;
    last: string;
    nickname?: string; // Optional
    sayHi(): string;
}

const thomas: Person = {first: "Thomas", last: "Hardy", id: 1, sayHi: () => {return "Hello"}};


thomas.first = "Something Else" 

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1- amount);
        this.price = newPrice;
        return newPrice
    }
}
console.log(shoes.applyDiscount(0.4));



interface Dog {
    name: string;
    age: number;
}



interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark(){return "woof"}
}

interface ServiceDog extends Dog{
    // Interface inherits from Dog.
    job: "drug sniffer" | "bomb" | "guide dog";
}
const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!"
    },
    job: "guide dog"
}

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee{
    /*
    Engineer inehrits from Person AND Employee so has to have name, id and email 
    as well as any additonally properties 
    */
   level: string,
   languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "PYTHON"],
}