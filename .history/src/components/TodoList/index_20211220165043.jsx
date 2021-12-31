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
    return (
        <div className="todo-list">
            {todos.map((todo,index) => (
                <div 
                className="toto" 
                key={index}
                >
                    {todo}
                </div>    
            ))}
        </div>
    );
}

export default TodoList;