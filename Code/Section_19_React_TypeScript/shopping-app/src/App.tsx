import './App.css'
import { useState } from 'react';
import ShoppingList from './components/ShoppingList'
import {type Item} from './models/item';
import ShoppingListForm from './components/ShoppingListForm';
import {v4 as getId} from "uuid"

function App() {
  const [items, setItems] = useState<Item[]>([]);
   const onAddItem = (product: string, quantity: number) => {
        console.log("MADE TO THE APP COMPONENT!");
        console.log(product);
        setItems([...items,{id: getId(), product, quantity}])
    }
  //  const items = [
  //       {id: 1, product: "Lemon", quantity: 3},
  //       {id: 2, product: "Chicken Breast", quantity: 2}
  //   ];

  return (
    <div >
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={onAddItem}/>
    </div>
  )
}

export default App
