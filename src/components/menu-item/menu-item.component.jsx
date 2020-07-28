import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemTitle,
  MenuItemSubtitle,
  MenuItemImage,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
    <MenuItemContent>
      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
      <MenuItemSubtitle className="subtitle">SHOP NOW</MenuItemSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
