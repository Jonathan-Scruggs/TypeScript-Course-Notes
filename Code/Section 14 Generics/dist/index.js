"use strict";
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username"); // Returns a element of html input type
console.dir(inputEl);
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
function identity(item) {
    return item;
}
identity(7);
identity("hello");
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
getRandomElement([5, 6, 21, 354, 567, 234, 654]);
getRandomElement(["a", "v", "asd"]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { pets: ["blue", "elton"] });
function printDoubleLength(el) {
    return el.length * 2;
}
printDoubleLength("asdasd");
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
