import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired
};

function Countdown(props) {
    const {counts} = props
    const [count,setCount] = useState(counts)

    useEffect(() => {
        const timeId = setInterval(() => {
            setCount(prev => prev - 1)   
        },1000)
        
    },[])

    const handleClickStop = () => {

    }

    return (
        <div>
            {count}
            <button onClick={handleClickStop} >Stop</button>
        </div>
    );
}

export default Countdown;