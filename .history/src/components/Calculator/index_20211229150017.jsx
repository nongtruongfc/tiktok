import { useState } from 'react';




function Calculator(props) {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [items,setItems] = useState([])

    const handleClick = () => {
        if (name && price) {
            const newItems = [...items,{
                name,
                price: +price
            }]
            setItems(newItems)
        }
    }

    return (
        <div>
            <input
            value={name}
            onChange = {e => setName(e.target.value)}
            type="text" 
            placeholder="Tên sản phẩm"/>

            <input
            value={price}
            onChange = {e => setPrice(e.target.value)} 
            type="text" 
            placeholder="Giá sản phẩm" />

            <button
            onClick = {handleClick}
            >Add</button>

            <div>Price total: </div>
        </div>
    );
}

export default Calculator;