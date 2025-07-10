import React, {useRef} from "react"

interface ShoppingListFormProps{
    onAddItem: (item: string, quantity: number) => void;
}
function ShoppingListForm({onAddItem}: ShoppingListFormProps): React.JSX.Element{

    const productInputRef = useRef<HTMLInputElement>(null); // Initial value is null
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        onAddItem(newProduct, quantity) // ? since might be null
        productInputRef.current!.value = ""; // Clearing input
        quantityInputRef.current!.value = "1";
    }


    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={productInputRef}/>
        <input type="number" min={0} ref={quantityInputRef}/>
        <button type="submit">Add Item</button>
    </form>
}

export default ShoppingListForm