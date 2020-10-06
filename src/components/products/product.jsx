import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addToCart, buyNow } from '../../store/actions/cartActions'
const Product = (props) => {
    const addToCartAction = (item) => {
        props.addToCart(item);
    };
    return (
        <React.Fragment>
            <div className="card">
                <img className="card-img-top" src="" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className="card-title">Rs:{props.price}</h6>
                    <button variant="primary" className="btn btn-primary" onClick={() => addToCartAction({ id: props.id, name: props.name, stock: props.stock, price: props.price,count:1 })}>Add To Cart</button>
                    <button variant="primary" className="btn btn-success" onClick={() => addToCartAction({ id: props.id, name: props.name, })}>Checkout</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default connect((state) => ({ cartList: state.cartList }), {
    addToCart, buyNow
})(Product);