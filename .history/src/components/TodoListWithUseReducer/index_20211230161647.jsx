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
//3. Reducer Function
const reducer = (state, action) => {

}
//4. Dispatch Action
function TodoListWithUseReducer() {
    const [state,dispatch] = useReducer(reducer,initState)
    console.log(state)
    return (
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
    );
}

export default TodoListWithUseReducer;