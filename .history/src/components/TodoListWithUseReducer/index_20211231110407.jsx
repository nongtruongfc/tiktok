import {useReducer} from 'react'
// useReducer
//1. Init State
const initState = {
    item: "",
    items: [],
}
//2. Actions

//3. Reducer Function

//4. Dispatch Action
function TodoListWithUseReducer() {

    return (
        <div>
            <input

            type="text" />
            <button>Add</button>
            <div></div>
        </div>
    );
}

export default TodoListWithUseReducer;