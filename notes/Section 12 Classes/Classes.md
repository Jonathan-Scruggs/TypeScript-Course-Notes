### Recap Of Classes
- Classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow for the creation and extension of customized and nicely organized objects.


### Constructors:
- `constructor()` is a method we define. Every time we instantiate a new instance of a class the constructor method is executed. 
```js
 constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!")
    }
```
- `first` and `last` are constructor parameters.

### Class Fields:
```js
class Player {  
    score = 0;
    numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log("BOOYAH!")
    }
}
```
- `score` and `numLives` are class fields.
- NOTE: Don't use `this` syntax.
- **Class fields are automatically** added to each **new instance of the class**.
- Only allows us to add values that are hardcoded though.
- Always initialized to same value but can change later on.

### Private # Fields:
```js
class Player {  
    score = 0;
    numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log("BOOYAH!")
    }
    loseLife(){
        if (this.numLives > 0){
            this.numLives -= 1;
        }
    }
}
```
- The `#` tells JavaScript the field is only **usable within the player class**.
-  You can also add `#` symbol in front of methods to make them **private methods.**
```js
#secret(){
        console.log("SECRET!!!")
    }
```
- This method can only be accessed within the class.
### Getters:
- Getters are a way to make something we call as if it was a **property** that then runs logic as if it were a method.
```js
get fullName(){
        return `${this.first} ${this.last}`
}
```
- Treated as a property rather than method.


### Setters:
- Object accessor that allows you to set a property.
- Allows you to access a property directly whilst still adding some additional logic for setting the property.
```js
set score(newScore){
        if (newScore < 0){
            throw new Error("Score must be postive!")
        }
        this.#score = newScore
    }
```

### Static Properties and Methods:
- The `static` keyword if we put in front of a property or a method that tells JavaScript that property or method exists on the class itself rather than each instance of the class.
```js
 static description = "Player In Our Game";
```
- Can't access this property on a instance of a class but rather have to **access it on  the class itself.**
```js
static randomPlayer(){
        return new Player("Andy", "Samberg");
}
```
- To call this method you would do `Player.randomPlayer()` since its a **class method** not a **instance method.**

### Extending Classes:
- A class can inherit from a **parent class and share functionality will another class**.
```js
class AdminPlayer extends Player{
    /*
    Extends the Base Class Player.
    */
}
```
- Now when we instantiate a new instance of the AdminPlayer class it will have all the methods and properties of the Player class.
```js
const admin = new AdminPlayer()
```
- We can also add on to the AdminPlayer class.
```js
class AdminPlayer extends Player{
    /*
    Extends the Base Class Player.
    */
    isAdmin = true;
}
```
- We added on a property but still have access to all the methods and properties of the Player class.
### Super():
- **super()** comes into player when **another class is inheriting form another class**.
```js
class AdminPlayer extends Player{
    /*
    Extends the Base Class Player.
    */
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete","restore world"])
```
- `super(first, last)` calls the constructor of the parent class `Player`, passing `first` and `last` as arguments. 
- To set `this.first` and `this.last` uses the logic of the parent Player class.
- You must call `super()` before using `this` in a **subclass constructor.** Otherwise JavaScript throws a reference error.
- `super` isn't just for constructors can also be used **inside methods to call methods** from the **parent class.** Ex: `super.taunt()` calls the taunt method of the parent class.
- `super` also sets up inheritance behind the scenes so that `AdminPlayer` *is-a* `Player`, but also with its own extensions like `powers` and `isAdmin`.
- **Essentially `super()` lets a subclass access and use stuff from the super class.**
