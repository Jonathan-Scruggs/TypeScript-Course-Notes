- Syntax: `const myVar: string =  'So Awesome!`;
- Type is on the **left side of equal sign but after a colon.**
- Also all lowercase.

### Numbers:
- In TypeScript as well as JavaScript numbers are just numbers. Numbers can be typed with a simple Type Annotation of `number`. 
### Type Inference
- Refers to the **Typescript compiler's ability** to infer types from **certain values in your code**.
- Typescript can remember a value's type event if you didn't provide a **type annotation and will enforce that type moving forward.**
- There are situations were we need to annotate variables but for now we let typescript infer it.

### Any Type:
- `any` is an espace hatch. It turns off type checking for this variable so you can assign that variable anything.
- Note: It sort of defeats the **purpose of TS** and typing so it should be used sparingly.

### When To Use Type Annotation:
1.) When we declare a **variable before initializing** it(done separately). 
