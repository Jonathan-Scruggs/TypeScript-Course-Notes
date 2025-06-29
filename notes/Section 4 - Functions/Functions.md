### Function Parameter Types:
- In TypeScript, we can specify the type of function parameters in a function definition. This allows TypeScript to enforce the types for values being passed into your function.

### Functions That Return Multiple Types:
```ts
string | number
```


### Anonymous Functions
- TypeScript can infer how an **unnamed function** is going to be called, it can automatically infer its parameters types.
- TypeScript does **contextual typing** on an **arrow functions**.

### Void:
- Void is a return type for functions that don't return anything.

### Never:
- The never type represents values that NEVER occur. Commonly used to annotate a function that always throws an exception or a function that will never finish executing. 
- Void returns undefined or null whilst `never`, a function doesn't even finish executing.