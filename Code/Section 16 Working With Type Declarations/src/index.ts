import axios from "axios"
import _ from "lodash"

_.sample()
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
// axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
// .then(res => {
//     console.log("WOO!!!!");
//     const {data} = res; // Data is of type user.
//     printUser(res.data)
// })
// .catch((e) => {
//     console.log("ERROR!", e)
// })
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then(res => {
    console.log("WOO!!!!");
    const {data} = res; // Data is of type user.
    data.forEach(printUser)
})
.catch((e) => {
    console.log("ERROR!", e)
})



function printUser(user: User){
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);


}