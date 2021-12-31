import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired,
};

function Countdown(props) {
    const {counts} = props
    const [count,setCount] = useState(counts)
    useEffect(() => {
        setInterval(() => {
            setCount(prev => prev - 1)   
        },1000)
        return () => {

        }
    },[])
    return (
        <div>
            {count}
        </div>
    );
}

export default Countdown;