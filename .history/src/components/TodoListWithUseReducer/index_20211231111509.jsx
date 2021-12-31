import {useReducer} from 'react'
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
            const newState = {
                ...state,
                item: action.payload            
            }
               
        default:
            new Error('Invalid action')
    }
}
//4. Dispatch Action
function TodoListWithUseReducer() {
    const [state,dispatch] = useReducer(reducer,initState)
    const {item,items} = state
    return (
        <div>
            <input
            value = {item}
            onChange={e => {
                dispatch(setItem(e.target.value))
            }}
            type="text" />
            <button>Add</button>
            <div></div>
        </div>
    );
}

export default TodoListWithUseReducer;