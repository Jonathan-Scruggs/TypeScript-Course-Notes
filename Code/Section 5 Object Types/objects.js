/*
This function expects a object called person. This object has a first property
which is of type string.
*/
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
// Now if we try to pass a empty object to the function it will say object 
// is missing certain properties
printName({ first: "Jonathan", last: "Jenkins" });
// let coordinate: { x:number, y: number} = {x: 34, y: 2}; // Coordinate has a type 
// // The object that is returned by the function
// function randomCoordinate(): {x: number, y:number}{
//     return {x: Math.random(), y: Math.random()};
// }
/*
Generally, if you have a object stored in a variable that a function uses.
TypeScript only checks if the properties needed are present. Excess properties are ignored
*/
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
var coordinate = { x: 34, y: 2 }; // Coordinate has a type of Point
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Borthers",
    numStreams: 123234543252,
    credits: {
        producer: "Phile Spector",
        writer: "Alex North"
    }
};
calculatePayout(mySong);
printSong(mySong);
