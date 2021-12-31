import { useState } from 'react';




function Calculator(props) {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [items,setItems] = useState([])


    return (
        <div>
            <input
            value={name}
            onChange = {e => setName(e.target.value)}
            type="text" 
            placeholder="Tên sản phẩm"/>
            <input type="text" placeholder="Giá sản phẩm" />
            <button>Add</button>
            <div>Price total: </div>
        </div>
    );
}

export default Calculator;