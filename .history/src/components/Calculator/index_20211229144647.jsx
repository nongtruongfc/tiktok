import React from 'react';
import PropTypes from 'prop-types';

Caculator.propTypes = {
    
};

function Caculator(props) {
    return (
        <div>
            <input type="text" placeholder="Tên sản phẩm"/>
            <input type="text" placeholder="Giá sản phẩm" />
            <button>Add</button>
            <div>Price total: </div>
        </div>
    );
}

export default Caculator;