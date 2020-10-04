import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart,buyNow } from '../../store/actions/cartActions'
const Product = (props) => {
    const addToCartAction = (item) => {
        props.addToCart(item);
    };
    return (
        <React.Fragment>
            <li>
                <div>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.stock}
                    </div>
                </div>
                <button variant="primary" onClick={()=>addToCartAction({id:props.id,name:props.name,})}>Add To Cart</button>
            </li>
        </React.Fragment>
    );
}

export default connect((state)=>({cartList:state.cartList}),{
    addToCart,buyNow
  })(Product);