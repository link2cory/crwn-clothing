import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemFooter,
  AddToCartButton,
  Image,
  ItemName,
  ItemPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, ...otherProps }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer {...otherProps}>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionItemFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </CollectionItemFooter>
      <AddToCartButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
