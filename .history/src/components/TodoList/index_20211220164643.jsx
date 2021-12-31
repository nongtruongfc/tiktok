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
    return (
        <div>
            
        </div>
    );
}

export default TodoList;