- **Generics** allow us to define **reusable functions and classes that work with multiple types** rather than a **single type.**
```ts
function wrapInArray<T>(element: T): T[] {
	return [element];
}
```

```ts
const nums: Array<number> = [];
```
- Array<`T`> is a generic type that can be used with different types whilst still getting type-checking benefits. T is a placeholder for any specific type.

```ts
const inputEl = document.querySelector<HTMLInputElement>("#username")!; // Returns a element of html input type
console.dir(inputEl)
inputEl.value = "Hacked!";
const btn = document.querySelector<HTMLButtonElement>(".btn")
```
- The `<>` contain the type your plugging into the function or method.
### Making A Generic

```ts
function identity<Type>(item: Type): Type {
    return item;
}
identity<number>(7)
```

```ts
function getRandomElement<T>(list: T[]): T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement<string>(["a","b","c"]))
```
### Inferred Generic Type Parameters:
```ts
getRandomElement(["a","v","asd"])
```
- We don't actually have to tell TypeScript the type being used for the generic function as TypeScript is smart enough to infer the Generic Type from the argument passed to the function.
- However, this isn't the case with every generic and sometimes you will need to provide the **type parameter.** 
### Generics, Arrow Functions and TSX Files
- `jsx` and `tsx` files use `<>` brackets everywhere.
- If we use a generic in a arrow function is a TSX file vscode will think your trying to make a HTML element. So in order to fix this you need to add a trailing comma to the generic type:
```tsx
<T,>
```
### Generics With Multiple Types:
```ts
function merge<T,U>(object1: T, object2: U){
    return {
        ...object1,
        ...object2
    }
}
const comboObj = merge({name: 'colt'}, {pets: ["blue","elton"]})
```
- `<T,U>` defines two generic types, **T and U so the function can accept two different kinds** of **objects and merge them.** 
- Pattern is to keep going in the alphabet. 
- **TypeScript** infers that the **return type of the Merge function is of type T and U**.
- Also **TypeScript is able to infer the generic types** based on the arguments of the `merge` function.
### Adding Type Constraints:
- We can **actually constrain the possible types** that a generic can take.
- We can use the `extends` keyword in the generic 
```ts
function merge<T extends object,U extends object>(object1: T, object2: U){
    return {
        ...object1
        ...object2
    }
}
```
- This constraint means that T and U both need to be of type object.

- We can also use a **interface or Type Alias as a constraint**.
```ts
interface Lengthy {
    length: number;
}
function printDoubleLength<T extends Lengthy>(el: T){
    return el.length * 2
}
```
### Default Type Parameters:
- We can make it so there is a **default type for Generics**.
- This is achieved by adding a `=` sign after the generic type parameter.
```ts
function makeEmptyArray<T = number>(): T[]{
    return []
}
const strings = makeEmptyArray();
```
- Now by default if no generic type is specified or we don't pass a argument that would allow for type inference the value will be number. 

### Generic Classes:
```ts
class Playlist<T> {
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el)
    }
}
const songs = new Playlist<Song>()
```
- The playlist class it typed but still uses a generic . So the queue will be an array of type `T` and when we use the **add method to add a song to the queue the argument also needs to be of type T.**
- The **advantage** is we now have **1 class that can suit different needs**.