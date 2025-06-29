### Objects
- Objects can be typed by declaring what the object should look like in the annotation. Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors.
### Type Alias:
- Instead of writing out objects types in an annotation, we can declare them separately in a **type alias**, which is simply the **desired shape of the object,**
- This makes our code more readable and even reuse the types else where in our code.
```ts
type Person = {
	name: string;
	age: number;
}
```
- You can also make primitive type alias like 
```ts
type MyNum = number;
let age: MyNum = 24234;
```
### Nested Objects:
- Objects inside of objects. 
### Optional Properties:
```ts
type Point = {
    x: number;
    y: number;
    z?: number;
}
```
- To make a field/property optional we add a `?` after it.
- So in the above code `z` is an optional property for the object to have.
```ts
type Point = {
    x: number;
    y: number;
    z?: number;
};
const myPoint: Point = {x: 1, y: 3};
```

### Read-only Modifier
- You can make objects in TS be read only by adding the `readonly` keyword before a property/field:
```ts
type User = {
    readonly id: number,
}
```
- TS will complain if we try to modify this property.
**Note: This does not work on reference types like objects and arrays. Only on value/primitive types.**


### Intersection Types:
```ts
type Circle = {
    radius: number;
}
type Colorful = {
    color: string;
}
type ColorfulCircle = Circle & Colorful
const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}
```
- Now ColorfulCircle consists of the properties of both Circle and Colorful.
- Additionally we can add additional properties/fields to a intersection type using another `&`.
```ts
type CatDog = Cat & Dog & {
    age: number;
}
```
