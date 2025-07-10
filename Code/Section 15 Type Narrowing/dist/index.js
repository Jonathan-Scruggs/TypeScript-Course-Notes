"use strict";
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    // Only way we make it to this point is if value is a number
    return value * 3;
}
const el = document.getElementById("idk");
if (el) {
    // Truthy so its not null inside this scope.
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            // Can iterate over word since we did a truthy check to verify its not undefined/null
        }
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someDemo(3, "3");
function getRuntime(x) {
    if ("episodeDuration" in x) {
        return x.episodeDuration * x.numEpisodes;
    }
    return x.duration;
}
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}
function isCat(animal) {
    return animal.name !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        // TypeScript knows its a Cat at this point
        return "Meow";
    }
    else {
        // TypeScript knows its a Dog at this point.
        return "Woof";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "OINK!";
        case ("cow"):
            return "MOO!";
        case ("rooster"):
            return "Cockadoodledoo!";
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
