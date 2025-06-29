```ts
class Player {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
- In TypeScript we can't simply just do `this.first = first`. Instead we have to tell TypeScript what the type of first and last is.
- This is **Type Annotating the class**. 
### Class Fields in TypeScript
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    first: string;
    last: string;
    score = 0
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
- `score` is a class field and is initialized to a value of zero. TypeScript infers that its of type number based on the assignment.
- Can also add annotation like so:
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string
    first: string;
    last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
### readOnly Class Properties
```ts
class Player {

    // Tells TypeScript the value assigned to first and last must be a string.
    readonly first: string;
    readonly last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
- `first` and `last` are class properties that are readonly as we added the `readonly` modifier to them. This means these properties cannot be reassigned.


### The Public Modifier:
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    readonly first: string;
    readonly last: string;
    public score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
- Exclusive to TypeScript. By default properties and methods are public unless specified otherwise. However, you can use to to make it clear to other developers that this is public and anybody outside of the class can access this method.
### The Private Modifier:
- `private` means this method or property is only accessible within the class
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    readonly first: string;
    readonly last: string;
    #score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
or 
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    readonly first: string;
    readonly last: string;
    private score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
```
- The advantage of using the `#` access modifier is that it ensures the variable is still private after the TS is transpiled to JS since its JS code. Enforced at runtime by JavaScript itself. This offers True encapsulation and privacy.
- However, `private` is a more common and readable solution.

### Parameter Properties Shorthand:
```ts
class Player {
    // Tells TypeScript the value assigned to first and last must be a string.
    // readonly first: string;
    // readonly last: string;
    private score: number = 0;
    constructor(public first: string, public last: string) {}
    private secretMethod(): void {
        console.log("SECRET METHOD!")
    }
}
```
- Tells TypeScript that we have a public property called first and its a string, as well as a public property last which is also a string. They are then initialized in this order.
- So `first` and `last` are class properties and **assigns them from the constructor parameters**. This shortcut is useful for reducing boilerplate code and making classes more concise.
### Getters and Setters:
```ts
 get fullName(): string{
        return `${this.first} ${this.last}`
}
```
- By **default any property** that has a **getter but not a setter is read only**.
```ts
get score(): number{
	return this._score
}

set score(newScore: number){
	if (newScore < 0){
		throw new Error("Score must be greater than or equal to zero")
	}
	this._score = newScore
}
```

### The Protected Modifier:
- protected comes into play when working with inheritance. 
- `protected` members are accessible inside the class they are **defined and in the subclass** that it extends it. However, they are not **accessible from outside the class hierarchy**.
```ts
class SuperPlayer extends Player {
    public isAdmin: boolean = true
    maxScore(){
        this._score = 9;
    }
}
```
- Since `_score` is protected we can access it in the subclass **SuperPlayer.**

### Classes and Interfaces:
- Interfaces describe shape of some object or class.
- In TypeScript we can make classes **"implement"** a interface.
```ts
interface Colorful {
    color: string; // In order to implement the Colorful interface need to have color interface field
}
class Bike implements Colorful{
    constructor(public color: string){}
}
```
- Also classes can **implement as many interfaces as you want**.

### Abstract Classes
- With an abstract class we define a pattern and methods that must be **implemented by a child class.**
- Abstract classes can still have functionality.
```ts
abstract class Employee {
    constructor(public first: string, public last: string){}
    abstract getPay(): number; // This method needs to exist in Sub Class
    greet(){
        console.log("HELLO!");
    }
}
```
- We can then extend this abstract Employee class.
```ts
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
```
- You can also have a class that extends a abstract class and implements a interface.