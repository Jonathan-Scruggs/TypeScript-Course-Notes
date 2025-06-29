- Union types allow us to give a **value a few different possible types**. If the eventual value's type is included, TypeScript will be happy.

- We can create a union type by using a single `|` to separate the types we want to include. 

### Type Narrowing w/ Union Types:
- Narrowing the Type is simply doing a **type check before working with a value**. If your value is a **string you may want to use it differently then if you got a number.** 
- Since unions allow multiple types for a value, it's good to check what came through before working with it.
```ts
let stuff: (number | string)[];
```
- Important to include the parentheses. 

### Literal Types:
- Are not just types but the values themselves too. 
- Can be combined with union types so a variable must be of one of these literal values.

```ts
let mood: "Happy" | "Sad" = "Happy";
```
- Mood must have the value "Happy" or "Sad" and we start off with "Happy".