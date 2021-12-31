import React from 'react';
import PropTypes from 'prop-types';

BackToTop.propTypes = {
    onCLickBackToTop: PropTypes.func,
};
BackToTop.defaultProps = {
    onCLickBackToTop: null,
}

function BackToTop(props) {
    {onCLickBackToTop} = props;
    return (
        <div 
        className="back-to-top"
        onClick={onCLickBackToTop}
        >
            top
        </div>
    );
}

export default BackToTop;