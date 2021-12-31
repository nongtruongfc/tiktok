import {useReducer} from 'react'
// useReducer
//1. Init State
const initState = {
    item: '',
    items: []
}
//2. Actions
const SET_ITEM = 'set_item'
const ADD_ITEM = 'add_item'
const DELETE_ITEM = 'delete_item'
const setItem = payload => {
    return {
        payload,
        type: SET_ITEM,
    }
}
//3. Reducer Function
const reducer = (state, action) => {
    console.log('state -> ', state)
    console.log('action -> ', action)
    return state
}
//4. Dispatch Action
function TodoListWithUseReducer() {
    const [state,dispatch] = useReducer(reducer,initState)
    const {item,items} = state
    return (
        <div>
            <input
            value = {item} 
            onChange = {e => {
                dispatch()
            }}
            type="text" />
            <button>Add</button>

            <div>
                {items.map((item,index) => (
                    <div key={index}>
                        {item}
                        <button>Xoa</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoListWithUseReducer;