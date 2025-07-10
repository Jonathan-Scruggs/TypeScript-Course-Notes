class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    // readonly first: string;
    // readonly last: string;
    protected _score: number = 0;
    constructor(public first: string, public last: string) {}

    private secretMethod(): void {
        console.log("SECRET METHOD!")
    }
    get fullName(): string{
        return `${this.first} ${this.last}`
    } 

    get score(): number{
        return this._score
    }

    set score(newScore: number){
        if (newScore < 0){
            throw new Error("Score must be greater than or equal to zero")
        }
        this._score = newScore
    }

}

class SuperPlayer extends Player {
    public isAdmin: boolean = true
    maxScore(){
        this._score = 9;
    }

}

const elton = new Player("Elton","Steele");
elton.fullName


interface Colorful {
    color: string; // In order to implement the Colorful interface need to have color interface field
}

interface Printable {
    print(): void;
}

class Bike implements Colorful{
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string){}

    print(){
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red")
const jacket1 = new Jacket("Prada","black");


abstract class Employee {
    constructor(public first: string, public last: string){}

    abstract getPay(): number; // This method needs to exist in Sub Class
    greet(){
        console.log("HELLO!");
    }
}


class FullTimeEmployee extends Employee {
    constructor(first: string, last:string, private salary: number){
        super(first,last);

    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number){
        super(first,last)

    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay())