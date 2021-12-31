import { useRef, useState } from 'react';




function Calculator() {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [items,setItems] = useState([])
    const refInputName = useRef()

    const handleClick = () => {
        if (name && price) {
            const newItems = [...items,{
                id: Math.random(),
                name,
                price: +price
            }]
            setItems(newItems)
            setName("")
            setPrice("")
            refInputName.current.focus()
        }
    }

    const handleDeleteItem = () => {

    }
    console.log("render lai")
    return (
        <div>
            <input
            ref = {refInputName}
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
            <div>
                {items.map(item => (
                    <div key={Math.random()}>
                        {`${item.name} - ${item.price}`}

                        <button
                        onClick={handleDeleteItem}
                        >Xoa</button>
                    </div>
                ))}
            </div>
            <div>Price total: </div>

        </div>
    );
}

export default Calculator;