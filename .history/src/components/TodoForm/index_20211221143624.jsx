import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value,setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(!onSubmit) return
        onSubmit()
    }
    const handleChangeInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <form>
            <input 
                type="text"
                value={value} 
                onChange={handleChangeInput}
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