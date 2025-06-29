##### Typeof Guards:
- typeof **Type Guards** involve simply doing a **type check before working with a value**.
- Since **unions allow multiple types for a value**, we can first check what **came through before working with it.**
- Works well when we are working with **primitive types**, however leaves us short for non-**primitive types like arrays.**

### Truthiness Type Guards:
- Involves checking a value for being truthy or falsie before working with it. Helpful in avoiding errors when values might be null or undefined.
```ts
const el = document.getElementById("idk")
if (el){
    // Truthy so its not null inside this scope.
} else {
    el
}
```

```ts
const printLetters = (word: string | null) => {
    if (word){
        for (let char of word){
            // Can iterate over word since we did a truthy check to verify its not undefined/null
        }
    } else {
		   console.log("Didn't pass in a word")
    }
}
```
### Equality Narrowing
- equality Type Guards involve **comparing types to each other** before doing certain **operations with values.**
- By checking **two values against one another**, we can be sure they're both the same **before working with them in a type-specific way.**
```ts
function someDemo(x: string | number, y: string | boolean){
    if (x === y) {
        x.toUpperCase()
    }
}
someDemo(3,"3")
```
### in Operator Narrowing
- JavaScript's `in` operator helps check if a certain property exists in a object. This means we can use it to check if a value exists in an object according to its type alias or aliases.
```ts
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
```
- In the code above we use the `in` operator to check what object type we are working with.
### instanceof Narrowing:
- `instanceof` is a JavaScript operator that allows us to check if **one thing is an instance of another(prototype chain).** 
- Helps us **narrow types when working with classes**. 
```ts
function printFullDate(date: string | Date){
    if (date instanceof Date){
        console.log(date.toUTCString())
    } else {
        console.log(new Date(date).toUTCString());
    }
}
```

```ts
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
    } else 
        console.log(entity.name)
    }
}
```

### Type Predicates:
 - TypeScript allows us to write custom functions that can narrow the type of a value. These functions have a special return type called a type predicate.
 - Takes the form `parameterName is Type`
```ts
function isCat(animal: Cat | Dog): animal is Cat{
    return (animal as Cat).name !== undefined
}
```
- Function must return a boolean.
- By setting the return type as a type predicate it tells TypeScript that this function determines whether or not the argument is of a certain type in this case `Cat`.
- This function determines whether or not something is a Cat or not.
```ts
function makeNoise(animal: Cat | Dog): string{
    if (isCat(animal)){
        // TypeScript knows its a Cat at this point
        return "Meow"
    } else {
        // TypeScript knows its a Dog at this point.
        return "Woof"
    }
}
```
- Useful when we are trying to narrow the type.

### Discriminated Unions:
- **Common pattern in TypeScript** involves creating a **literal property** that is common across multiple types. We can then narrow down the type **using this literal property.** 
```ts
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
type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "OINK!";
        case("cow"):
            return "MOO!";
        case("rooster"):
            return "Cockadoodledoo!";
    }
}
```
- In the code above we use the **shared property "kind"** which is set to a literal type to discriminate between the types when dealing with the union type.
### Exhaustive Checks With Never:
```ts
type FarmAnimal = Pig | Rooster | Cow | Sheep;
function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "OINK!";
        case("cow"):
            return "MOO!";
        case("rooster"):
            return "Cockadoodledoo!";
        default:
            // We should never make it here, if we handled all cases correctly
            const shouldNeverGetHere: never = animal
    }
}
```

```ts
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
```

- The `never` type is used to represent values that **never should occur-literally.** Tells TypeScript if we make it here something is wrong.
- TypeScript gives us an error saying we should have never reached here. Which is in the above code we are not handling a case.