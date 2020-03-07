import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.component";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}

        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
