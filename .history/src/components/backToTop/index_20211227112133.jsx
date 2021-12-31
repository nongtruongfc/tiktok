import React from 'react';
import PropTypes from 'prop-types';

BackToTop.propTypes = {
    onCLickBackToTop: PropTypes.func,
};
BackToTop.defaultProps = {
    onCLickBackToTop: null,
}
function BackToTop(props) {
    return (
        <div className="back-to-top">
            top
        </div>
    );
}

export default BackToTop;