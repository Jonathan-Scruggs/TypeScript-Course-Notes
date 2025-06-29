- Almost serve the exact same purpose as a type aliases, we can use them to create reusable, **modular types that describe the shapes of objects.**
```ts
interface Point {
    x: number;
    y: number;
}
const pt: Point = {x: 123, y: 1234}
```

### Adding Methods to A Interface:
```ts
interface Person {
    readonly id: number; //readonly so can't be changed
    first: string;
    last: string;
    nickname?: string; // Optional
    sayHi(): string;
}
```
- `sayHi()` is a method of the **Person interface** and it **returns a string.** 
### Methods With Parameters To A Interface:
```ts
interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}
```

### Reopening Interfaces:
```ts
interface Dog {
    name: string;
    age: number;
}
interface Dog {
    breed: string;
    bark(): string;
}
```
- **Reopening a interface is adding additionally properties and methods**.


### Extending Interfaces:
```ts
interface ServiceDog extends Dog{
    // Interface inherits from Dog.
    job: "drug sniffer" | "bomb" | "guide dog";
}
```

### Interface Multiple Inheritance:
- Interfaces allow **you to add new properties**
- Interfaces can only **describe shape of object**, but you can't use it to **describe the shape of a literal type.**
- You can **extend interfaces as well as types but you can't use the extend keyword** instead you have to use **intersection types.**
- **Type aliases** can describe any type of type **whilst interfaces can only describe shape of objects**.