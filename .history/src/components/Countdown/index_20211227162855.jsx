import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired,
};

function Countdown(props) {
    const {counts} = props
    const [count,setCount] = useState(counts)
    useEffect(() => {
        
    },[])
    return (
        <div>
            {count}
        </div>
    );
}

export default Countdown;