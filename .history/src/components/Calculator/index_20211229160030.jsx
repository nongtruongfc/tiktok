import { useMemo, useRef, useState } from 'react';

function Calculator() {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [items,setItems] = useState([])
    const refInputName = useRef()

    const total = useMemo(() => {
        let result = items.reduce((total, item) => {
            console.log("tinh toan gia")
            return total + item.price
        },0)
        return result
    },[items])

    
    
    const handleAddItem = () => {
        if (name && price) {
            const newAddItems = [...items,{
                name,
                price: +price
            }]
            setItems(newAddItems)
            console.log('them item')
            setName("")
            setPrice("")
            refInputName.current.focus()
        }
    }

    const handleDeleteItem = (index) => {
        console.log('xoa item')
        const newRemoveItems = [...items]
        newRemoveItems.splice(index,1)
        setItems(newItems)
    }
    
    return (
        <div>
            {console.log("render")}
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
            onClick = {handleAddItem}
            >Add</button>
            <div>
                {items.map((item,index) => (
                    <div key={Math.random()}>
                        {`${item.name} - ${item.price}`}

                        <button
                        onClick={() => handleDeleteItem(index)}
                        >Xoa</button>
                    </div>
                ))}
            </div>
            <div>Price total: {total}</div>

        </div>
    );
}

export default Calculator;