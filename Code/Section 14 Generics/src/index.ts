const nums: Array<number> = [];
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>("#username")!; // Returns a element of html input type
console.dir(inputEl)
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")


function identity<T>(item: T): T {
    return item;
}

identity<number>(7);
identity<string>("hello");

function getRandomElement<T>(list: T[]): T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["a","b","c"]))

getRandomElement<number>([5,6,21,354,567,234,654]);

getRandomElement(["a","v","asd"])

function merge<T extends object,U extends object>(object1: T, object2: U){
    return {
        ...object1,
        ...object2
    }
}
const comboObj = merge({name: 'colt'}, {pets: ["blue","elton"]})


interface Lengthy {
    length: number;
}
function printDoubleLength<T extends Lengthy>(el: T){
    return el.length * 2;
}
printDoubleLength("asdasd");

function makeEmptyArray<T = number>(): T[]{
    return []
}
const strings = makeEmptyArray();

interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el)
    }
}
const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
