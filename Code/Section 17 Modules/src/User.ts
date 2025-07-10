import type { Person } from "./types";
export default class User implements Person{
    constructor(public username: string, public email: string){}
    logout(){
        console.log(`${this.username} logs out!!`)
    }
}
// Named Export
export function userHelper(){
    console.log("USER HELPER!");
}