import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  CheckoutItemQuantityContainer,
  CheckoutItemQuantityArrow,
  CheckoutItemQuantity,
  CheckoutItemTableMember,
  CheckoutItemRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt="item" />
      </CheckoutItemImageContainer>
      <CheckoutItemTableMember>{name}</CheckoutItemTableMember>
      <CheckoutItemQuantityContainer>
        <CheckoutItemQuantityArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemQuantityArrow>
        <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
        <CheckoutItemQuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemQuantityArrow>
      </CheckoutItemQuantityContainer>
      <CheckoutItemTableMember>{price}</CheckoutItemTableMember>
      <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
