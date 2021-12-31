import React from 'react';
import PropTypes from 'prop-types';

Caculator.propTypes = {
    
};

function Caculator(props) {
    return (
        <div>
            <input type="text" placeholder="Tên sản phẩm"/>
            <input type="text" placeholder="Giá sản phẩm" />
        </div>
    );
}

export default Caculator;