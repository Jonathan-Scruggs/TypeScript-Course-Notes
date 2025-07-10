import React from "react"

interface GreeterProps {
    person: string;
}

export default function Greeter({person}: GreeterProps): React.JSX.Element {
    return <h1>Hello, {person}!</h1>
}