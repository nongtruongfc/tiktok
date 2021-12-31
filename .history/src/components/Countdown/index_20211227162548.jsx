import React from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    counts: PropTypes.number.isRequired,
};

function Countdown(props) {
    const {counts} = props
    
    return (
        <div>
            {counts}
        </div>
    );
}

export default Countdown;