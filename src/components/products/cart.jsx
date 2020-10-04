import React from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import {removeFromCart,buyNow} from '../../store/actions/cartActions'
function Cart(props) {
  const removeFromCart = (index) => {
    props.removeFromCart(index);
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
                <button variant="primary" onClick={()=>removeFromCart(props.index)}>Remove</button>
            </li>
        </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  cartList: state.cartList,
});
export default connect(mapStateToProps,{removeFromCart,buyNow})(Cart);
