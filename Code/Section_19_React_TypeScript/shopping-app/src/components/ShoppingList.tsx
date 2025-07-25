import React from "react"
import {type Item} from '../models/item';
interface ShoppingListProps{
    items: Item[]
}

export default function ShoppingList({items}: ShoppingListProps): React.JSX.Element{
   
    return <div>
        <h1>Shopping List</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.product} - {item.quantity}</li>
            ))}
        </ul>
    </div>
}