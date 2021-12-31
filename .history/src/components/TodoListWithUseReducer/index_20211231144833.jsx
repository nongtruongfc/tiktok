import {useReducer, useRef} from 'react'
// useReducer
//1. Init State
const initState = {
    item: "",
    items: [],
}
//2. Actions
const SET_ITEM = 'set_item'
const ADD_ITEM = 'add_item'
const REMOVE_ITEM = 'remove_item'

const setItem = payload => {
    return {
        payload,
        type: SET_ITEM
    }
}
const addItem = payload => {
    return {
        payload,
        type: ADD_ITEM
    }
}
const removeItem = payload => {
    return {
        payload,
        type: REMOVE_ITEM
    }
}
//3. Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_ITEM:
            return {
                ...state,
                item: action.payload            
            }

        case ADD_ITEM:
            const newItems = [...state.items]
            newItems.push(action.payload)
            return {
                ...state,
                items: newItems
            }
            
        case REMOVE_ITEM:
            const newItems2 = [...state.items]
            newItems2.splice(action.payload,1)

            return {
                ...state,
                items: newItems2
            }
        default:
            new Error('Invalid action')
    }
}
//4. Dispatch Action
function TodoListWithUseReducer() {
    const [state,dispatch] = useReducer(reducer,initState)
    const {item,items} = state
    const inputRef = useRef()
    const handleAddItem = () => {
        dispatch(addItem(state.item))
    }
    const handleRemoveItem = index => {
        dispatch(removeItem(index))
    }
    return (
        <div>
            <input
            value = {item}
            onChange={e => {
                dispatch(setItem(e.target.value))
            }}
            type="text" />
            <button
            onClick={handleAddItem}
            >Add</button>
            <div>
                {items.map((item,index) => (
                    <div key={index}>
                        {item} 
                        <button
                        onClick = {() => handleRemoveItem(index)}
                        >xoa</button>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default TodoListWithUseReducer;