import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    
};

function TodoForm(props) {
    return (
        <form>
            <input type="text" />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;