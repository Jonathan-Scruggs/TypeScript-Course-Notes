### Setting Up A Project:
1.) `tsc --init`
2.) `src` and `dist` directory 
3.) `/src/index.ts`
4.) Set `outdir` to `dist`.
5.) Only include `src` directory in compilation.


- To have our code run in the browser we can make a `index.html` file with a script tag to link to our Javascript file.


- To have it so that the browser automatically refresh's every time we make a change to our JavaScript file we can use the npm package `lite-server`
1.) `npm init -y`
- `npm init`: initializes a new Node.js project by creating the `package.json`.
- `-y` automatically answers yes to all prompts with default values.
2.) `npm install lite-server`



### Working With The Dom:
- **TypeScript** automatically knows about the **Document object and its type.**
### Lib Compiler Option:
- We can configure this option in the TypeScript config to not include Types and how to include other tools/Types.
```json
"lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
```
- Empty means it doesn't know any Types.
- If we leave this line commented out then libraries like the DOM and Math types are included.
```json
"lib": [
      "DOM"
    ],
```
- Includes the DOM types.


Note: Type files end in a `.d.ts` and are type declarations.


```json
"lib": [
      "DOM",
      "ES2021"
    ],
```
- Includes methods from JavaScript version `ES2021`. 
- You can also include individual pieces of a library.


### TypeScript Non-Null Assertion Operator:
- The non null assertion operator which is a `!`.  We can add it after an assignment line and it tells **TypeScript that this is guaranteed to not be null.**
```ts
const btn = document.getElementById("btn")!;
```
- The type of `btn` is guaranteed to be a HTML element.
- A little riskier but we know for sure that this thing is not going to be null.

### Type Assertions:
- Sometimes you might have more ***specific information*** about a **value's type** and you want to **make sure TypeScript knows that too.**
- You can **assert a value's type** by using the `as` keyword followed by the **specific type you want to assert.**
```ts
const myPic = document.querySelector("profile-image") as HTMLImageElement
```
- TypeScript treats a value as a certain type/


```ts
let mystery: string = "Hello World!";
const numChars = (mystery as string).length
```

### Type Assertions With DOM(Real World Application)

```ts
const btn = document.getElementById("btn")!;

const input = document.getElementById("todoinput")! as HTMLInputElement;
// Checks if btn exists and if it does then we add the Event Listener.(Optional Chaining Operator)
btn.addEventListener("click", function(){
    input.value
});
```
- `input` is now treated as a HTML input element and thus in our code we can access the `.value` property.

- Note: There is also a alternative syntax for type assertions: 
```ts
(<HTMLInputElement>input).value
```
- Asserts input as a HTML input element.

### Working With Events:
```ts
function handleSubmit(e: SubmitEvent){
    // Telling TypeScript that the event is a Submit Event
    e.preventDefault();
}
```
