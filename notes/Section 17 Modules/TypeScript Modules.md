
### Using TypeScript Modules:
- When we add a **top level await** or a **export our TypeScript file** becomes a **module** rather than a script.
```ts
console.log("HELLO WORLD!!!!");
export function add(x: number, y: number){
    return x + y;
}
function sample<T>(list: T[]): T {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
```
- Once its a module, the functions and variables have a module scope rather than a global scope. The `add` function is exported and can be imported by other modules whilst `sample` remains internal to this module.
```ts
// Named import so goes in curly braces
import {add} from "./utils.js"
add(1,2);
```
- We can write `ES6` module syntax.

### Changing Compilation Module System:
- Go to the `tsconfig.json` file and looking for the **module setting**. 
- If we set the module setting to `ES6` then our JavaScript module output will follow the `ES6` standard.
`Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:2:1)`
- However, our browser doesn't know about module syntax. We have to specify `type="module"` when we specify 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modules</title>
</head>
<body>
    <script type="module" src="./dist/index.js"></script>
</body>
</html>
```
- However, we still get:
`Access to script at 'file:///C:/Users/Jonathan-School/Documents/TypeScript%20Course/Section%2017%20Modules/dist/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.`
- When you open a HTML file directly the browser treats it as a local file. However, JavaScript tries to import modules the browser applies CORS security that block loading modules from the local file system.
### Import/Export Syntax In Depth
#### Named Exports and Imports:
- Exports and imports where we individually name what we are importing and exporting.
- We use curly braces in the import.
```ts
import { add, sample } from "./utils.js";
```

#### Default Exports:
- Parts of a module that are exported by default when a module is imported.
- Can only have one per file. 
```ts
export default class User {
    constructor(public username: string, public email: string){}
    logout(){
        console.log(`${this.username} logs out!!`)
    }
}
```
- Now when we go to import it we can simply import without curly braces. Additionally, we can name it whatever:
```ts
import Whatever from "./User"
```
- `Whatever` holds the default export of the User module. Acts as a container.

- In addition to default exports we can also have named exports in a file with default exports.
```ts
export default class User {

    constructor(public username: string, public email: string){}

    logout(){

        console.log(`${this.username} logs out!!`)

    }

}

// Named Export

export function userHelper(){

    console.log("USER HELPER!");

}
```

```ts
// Named import so goes in curly braces
import add, {sample} from "./utils";
import User from "./User"
import { userHelper } from "./User";
import "./utils"
console.log(sample([12, 3, 34]));
console.log(add(1,2));
```

#### Using the `as` keyword to give named exports an alias:
```ts
import add, {sample as randomSample} from "./utils";
```
- Now we can access the named export `sample` as `randomSample` in our file.

### Importing Types:
```ts
export interface Person {
    username: string;
    email: string;
}
export type Color = "red" | "green" | "blue";
```

```ts
import { Person } from "./types";
export default class User implements Person {
    constructor(public username: string, public email: string){}
    logout(){
        console.log(`${this.username} logs out!!`)
    }
}

// Named Export
export function userHelper(){
    console.log("USER HELPER!");
}
```
- However, our actual types won't make it into JavaScript after transpiring.

- TypeScript also provides specific syntax for importing types:
```ts
import type { Person } from "./types";
```
- Safer way to import types as `import type` is guaranteed to be removed from your JavaScript. Only works to import types. 
- Alternative Syntax:
```ts
import {type Person, otherMethod} from "./somefile"
```
- Especially important when using other transpilers like Babble.