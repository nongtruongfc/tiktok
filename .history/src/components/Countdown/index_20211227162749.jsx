import React, { useState } from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired,
};

function Countdown(props) {
    const {counts} = props
    const [count,setCount] = useStateate(counts)
    return (
        <div>
            {count}
        </div>
    );
}

export default Countdown;