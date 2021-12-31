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
    const {onChangeInput, onSubmit} = props;
    const handleChangeInput = value => {
        if(!onChangeInput) return
        onChangeInput(value)
    }
    return (
        <form>
            <input 
                type="text" 
                onChange={e => handleChangeInput(e.target.value)}
            />
            <button type="submit"
            >
            submit
            </button>
        </form>
    );
}

export default TodoForm;