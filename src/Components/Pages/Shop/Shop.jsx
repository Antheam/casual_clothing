import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../../Components/CollectionsOverview/CollectionsOverview.jsx";
import CollectionPage from "../Collection/Collection.jsx";
// import PreviewCollection from "../../PreviewCollection/PreviewCollection.jsx";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
