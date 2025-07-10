console.log("HELLO WORLD!!!!");
export default function add(x: number, y: number){
    return x + y;
}

export function sample<T>(list: T[]): T {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}