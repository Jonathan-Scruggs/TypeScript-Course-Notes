- Files that end in `.d.ts` and contain ***only* type information.**



### Using 3rd Party Libraries: Axios


Note: Promise resolve value: The value you get when the promise finishes successfully.
- In Axios we can use this so our **promise resolves** to the **specific type that is being returned by the HTTPS request.**
```ts
import axios from "axios"

interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}
  
// Tells axios that we want our response data to be of type User
axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    console.log("WOO!!!!");
    const {data} = res;
})
.catch((e) => {
    console.log("ERROR!", e)
})
```
-  This has the advantage that now we have basic checks so now if we try to access properties that don't exist TypeScript will tell us.
### Installing Types Separately:
```
npm install --save-dev @types/lodash
```
- We can install the necessary **Type Declaration for our specific library** from the **types package.**
- `--save-dev`: Used to save to dev dependencies since we don't need the types in production.

https://www.typescriptlang.org/dt/search/
- This link allows you to search for type information about a package.