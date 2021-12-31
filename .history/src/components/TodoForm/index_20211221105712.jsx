import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onChangeInput: PropTypes.func,
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    onChangeInput: null,
    onSubmit: null
}

function TodoForm(props) {
    return (
        <form>
            <input type="text" />
            <button type="submit"
            >
            submit
            </button>
        </form>
    );
}

export default TodoForm;