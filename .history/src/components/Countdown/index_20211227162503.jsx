import React from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    count: PropTypes.number.isRequired,
};

function Countdown(props) {
    const [count,setCount] = props
    return (
        <div>
            
        </div>
    );
}

export default Countdown;