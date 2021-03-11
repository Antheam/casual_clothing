import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../PreviewCollection/PreviewCollection.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <PreviewCollection
          key={collection.id}
          title={collection.title}
          routeName={collection.routeName}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
