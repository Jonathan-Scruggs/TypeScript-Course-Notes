Note: Avoid putting `&` character and spaces in the folder structure for project.

### npx vs npm:
- `npm` is a package manager it install packages to your project, runs scripts defined in `package.json` and `npm run dev`. Manages dependencies and versions.

- `npx`: is a package runner that comes with npm and can run executables from npm packages without installing them globally. Can run packages that are installed locally in a project. 
- `npx` also has the advantage that it can download and run packages temporarily if they're not installed. 
```bash
# npm - runs scripts from package.json
npm run dev        # runs the "dev" script you defined
npm run build      # runs the "build" script you defined
npm install vite   # installs vite to your project

# npx - runs package executables directly
npx vite           # runs vite directly (same as npm run dev if dev script uses vite)
npx create-react-app my-app  # downloads and runs create-react-app without installing it globally
npx cowsay "hello" # downloads and runs cowsay temporarily
```

### Strict mode:
- `strict mode` is a mode we can set that allows for extra error checking that helps catch bugs and problematic code earlier. 
- Makes JavaScript more strict about syntax and behavior.
- Turns silent errors into actual thrown errors.
- Prevents you from using problematic features.
- Makes debugging easier by failing fast.
```js
"use strict";  // at the top of a file or function
```

Or React StrictMode:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
- A React component that helps catch React-specific issues. 
- Only runs in development mode and gets stripped out in production. 


### tsx files:
- `tsx`: is just the TypeScript flavor of `jsx` files.

### Components In TypeScript:
```tsx
import React from "react"
export default function Greeter(): React.JSX.Element{
    return <h1>Hello!</h1>
}
```
- Adding return type of `React.JSX.Element`.
### React.FC:
- A Type that we get a part of the React types.
### Props With TypeScript:
```tsx
import React from "react"
export default function Greeter(props: {person: string}): React.JSX.Element{
    return <h1>Hello, {props.person}!</h1>
}
```
- However one we start to add lots of **props to our component** this can make the function **signature look hectic.** 
- Instead we can make a **type or interface** that the `props` object must match

```tsx
import React from "react"
interface GreeterProps {
    person: string;
}
export default function Greeter(props: GreeterProps): React.JSX.Element {
    return <h1>Hello, {props.person}!</h1>
}
```
- Additionally you can also de-structure props out of the props object.
```tsx
import React from "react"
interface GreeterProps {
    person: string;
}
export default function Greeter({person}: GreeterProps): React.JSX.Element {
    return <h1>Hello, {person}!</h1>
}
```

### More Complicated Component:
```tsx
import './App.css'
import ShoppingList from './components/ShoppingList'
function App() {
   const items = [
        {id: 1, product: "Lemon", quantity: 3},
        {id: 2, product: "Chicken Breast", quantity: 2}
    ];
  return (
    <div >
      {<ShoppingList items={items}/>}
    </div>
  )
}
export default App
```

```tsx
import React from "react"
interface Item {
    id: number,
    product: string;
    quantity: number;
}
interface ShoppingListProps{
    items: Item[]
}

export default function ShoppingList({items}: ShoppingListProps): React.JSX.Element{
    return <div>
        <h1>Shopping List</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.product} - {item.quantity}</li>
            ))}
        </ul>
    </div>
}
```
### useState With TypeScript:
```tsx
import './App.css'

import { useState } from 'react';

import ShoppingList from './components/ShoppingList'

import {type Item} from './models/item';

function App() {
  const [items, setItems] = useState<Item[]>([]);
   return (
    <div >
      {<ShoppingList items={items}/>}
    </div>
  )
}
```
- `useState` is a generic function
- `useState` always returns a tuple with the **current state value** and a **setter function**.
- This allows us to have all the Type Safety Benefits in our component. 
##### Type Safety Benefits:
- Since we specified `<Item[]>`, TypeScript now knows:
	- `items` is always an `Item[]`
	- `setItems` only accepts `Item[]` or `(prev: Item[]) => Item[]`
- Thus we get autocomplete and type checking on array methods.


### FormEvent Type:
- When making a function that handles when a React form is submitted we use the `React.FormEvent` type.
- This allows us to access methods of the Form Event like preventing default and accessing values.
- Also gives us type checking and autocomplete benefits.
```tsx
import React from "react"
function ShoppingListForm(): React.JSX.Element{

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        console.log("Submitted.")
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name"/>
        <button type="submit">Add Item</button>
    </form>
}
export default ShoppingListForm
```
### `useRef` React Hook:
- `useRef` is a React hook that gives you a way to **persist values across renders** without causing **re-renders when the value changes.**
```tsx
const myRef = useRef<HTMLInputElement>(null);
```
- `useRef` returns a mutable ref object with a `.current` property that holds the value you pass to it.
#### Key Characteristics:
1.) **Persists** across renders: The value stays the same between re-renders.
2.) Doesn't trigger -re-renders: Changing `.current` won't cause components to re-render.
3.) Mutable: You can change `.current` directly.

##### Common Use Cases:
1.) Dom References:
```tsx
function MyComponent() { const inputRef = useRef<HTMLInputElement>(null); const focusInput = () => { inputRef.current?.focus(); // Access DOM element directly 
}; 
return ( <div> <input ref={inputRef} /> <button onClick={focusInput}>Focus Input</button> </div> ); }
```
- `useRef` creates a container that can hold a reference to an HTML input element. However, initially starts with `null`. This is useful as we can directly control this DOM element.
- Then we attach the ref to a JSX element by using `ref={inputRef}` tells React that when you create this input element store it in `inputRef.current`. 
- After React renders this, `inputRef.current` will contain the actual DOM input element.
2.) Storing Mutable Values:
```tsx
function Timer() {
  const countRef = useRef(0);
  const increment = () => {
    countRef.current += 1; // Won't cause re-render
    console.log(countRef.current);
  }; 
  return <button onClick={increment}>Increment</button>;
}
```

```tsx
import React, {useRef} from "react"
interface ShoppingListFormProps{
    onAddItem: (item: string) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): React.JSX.Element{
    const inputRef = useRef<HTMLInputElement>(null); // Initial value is null

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const newProduct = inputRef.current!.value;
        onAddItem(newProduct) // ? since might be null
        inputRef.current!.value = ""; // Clearing input
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={inputRef}/>
        <button type="submit">Add Item</button>
    </form>
}
export default ShoppingListForm
```
- React hooks in TypeScript in general are generics.
- Generally React is written the same we just have to add types.