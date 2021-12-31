import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css'

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteItem: PropTypes.func
};
TodoList.defaultProps = {
    todos: [],
    deleteItem: null
}
function TodoList(props) {
    const {todos,deleteItem} = props
    const handleClick = todo => {
        if (!deleteItem) return
        deleteItem(todo)
    }
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <div 
                className="todo" 
                key={todo.id}
                onClick={() => handleClick(todo)}
                >
                    {todo.name}
                </div>    
            ))}
        </div>
    );
}

export default TodoList;