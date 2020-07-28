import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewContent,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title}</CollectionPreviewTitle>
    <CollectionPreviewContent>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewContent>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
