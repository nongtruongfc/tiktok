import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired
};

function Countdown(props) {
    const {counts} = props
    const [count,setCount] = useState(counts)
    const [toogle,setToogle] = useState(false)
    const ref = useRef(99)
    console.log(ref.current)
    useEffect(() => {
        const timeId = setInterval(() => {
            setCount(prev => prev - 1)   
        },1000)
        ref.current = timeId
        return () => {
            clearInterval(timeId)
        }
    },[toogle])

    const handleClickStop = () => {
        clearInterval(ref.current)
        setToogle(!toogle)
    }

    return (
        <div>
            {count}
            <button onClick={handleClickStop} >Stop</button>
        </div>
    );
}

export default Countdown;