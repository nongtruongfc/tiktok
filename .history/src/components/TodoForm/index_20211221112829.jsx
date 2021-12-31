import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    value: PropTypes.string,
    onChangeInput: PropTypes.func,
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    value: null,
    onChangeInput: null,
    onSubmit: null
}

function TodoForm(props) {
    const {onChangeInput, onSubmit} = props;
    const handleChangeInput = value => {
        if(!onChangeInput) return
        onChangeInput(value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(!onSubmit) return
        onSubmit()
    }
    return (
        <form>
            <input 
                type="text"
                value={value} 
                onChange={e => handleChangeInput(e.target.value)}
            />
            <button 
                type="submit"
                onClick={e => handleSubmit(e)}
            >
            submit
            </button>
        </form>
    );
}

export default TodoForm;