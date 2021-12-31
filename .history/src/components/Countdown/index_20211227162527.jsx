import React from 'react';
import PropTypes from 'prop-types';

Countdown.propTypes = {
    count: PropTypes.number.isRequired,
};

function Countdown(props) {
    const {count} = props
    return (
        <div>
            
        </div>
    );
}

export default Countdown;