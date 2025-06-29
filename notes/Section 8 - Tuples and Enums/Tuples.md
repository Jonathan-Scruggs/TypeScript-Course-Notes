- Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.
```ts
let myTuple: [number, string];
```
#### Enums:
- Enums allow us to define a **set of named constants.** We can give these **constants numeric or string values.**
```ts
enum Responses {
	no, // 1
	yes, // 2
	maybe, //3
}
enum Responses {
	no = 'No',
	yes = 'Yes',
	maybe = 'Maybe',
}
```

### Use Case For Enums:
