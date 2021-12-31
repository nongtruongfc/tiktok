import React from 'react';
import PropTypes from 'prop-types';

Calculator.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
    onAdd: PropTypes.func,
};

Calculator.defaultProps = {
    name: null,
    price: null,
    totalPrice: null,
    onAdd: null,
}

function Calculator(props) {
    const {name,price,totalPrice,onAdd} = props
    return (
        <div>
            <input
            

            type="text" 
            placeholder="Tên sản phẩm"/>
            <input type="text" placeholder="Giá sản phẩm" />
            <button>Add</button>
            <div>Price total: </div>
        </div>
    );
}

export default Calculator;