import React, { useState, useEffect } from 'react';
import '../../App.css';
import { connect } from 'react-redux'
import Product from './product';
import Cart from './cart';
function Products(props) {
  const { products, cartList } = props;
  const [total, setTotal] = useState(1000);
  const totalPrice = () =>{
   return cartList.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0)
  }
  return (
    <React.Fragment>
      <div className='product-main'>
        <div className='product-list flex-container'>
          {
            !products ? (<div>Loading...</div>) : (
              <div className="store-items">
                {
                  products.map((item, index) => (
                    <Product name={item.name} stock={item.stock} id={item.id} key={index} index={index} price={item.price}></Product>
                  ))
                }
              </div>
            )}
        </div>
        <div className='cart-list flex-container'>
          {
            !cartList ? (<div>Loading...</div>) : (
              cartList.length == 0 ? (<div>Cart is empty</div>) : (
                <React.Fragment>
                  <ul className="cart-items">
                    {
                      cartList.map((item, index) => (
                        <Cart name={item.name} stock={item.stock} id={item.id} key={index} index={index} price={item.price} count={item.count}></Cart>
                      ))
                    }
                  </ul>
                  <span>Total Cart value:{totalPrice()}</span>
                </React.Fragment>
              )
            )}
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  products: state.productList,
  cartList: state.cartList
});
export default connect(mapStateToProps)(Products);
