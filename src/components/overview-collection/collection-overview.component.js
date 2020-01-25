import React from "react";
import { connect } from "react-redux";

import "./collection-overview.styles.scss";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);
