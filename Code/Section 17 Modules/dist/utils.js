console.log("HELLO WORLD!!!!");
export default function add(x, y) {
    return x + y;
}
export function sample(list) {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
