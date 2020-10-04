import React from 'react';
import '../../App.css';
import { connect } from 'react-redux'
import Product from './product';
import Cart from './cart';
function Products(props) {
  const { products, cartList } = props;
  return (
    <React.Fragment>
      <div className='product-list'>
        {
          !products ? (<div>Loading...</div>) : (
            <ul className="table" style={{ width: 500 + 'px' }}>
              {
                products.map((item, index) => (
                  <Product name={item.name} stock={item.stock} id={item.id} key={index} index={index}></Product>
                ))
              }
            </ul>
          )}
      </div>
      <div className='cart-list'>
        {
          !cartList ? (<div>Loading...</div>) : (
            cartList.length == 0 ? (<div>Cart is empty</div>) : (
              <ul className="table" style={{ width: 500 + 'px' }}>
                {
                  cartList.map((item, index) => (
                    <Cart name={item.name} stock={item.stock} id={item.id} key={index} index={index}></Cart>
                  ))
                }
              </ul>
            )
          )}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  products: state.productList,
  cartList: state.cartList
});
export default connect(mapStateToProps)(Products);
