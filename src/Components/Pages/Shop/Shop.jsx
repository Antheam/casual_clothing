import React from "react";
import shopData from "./Shop.data.jsx";

import PreviewCollection from "../../PreviewCollection/PreviewCollection.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
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
  }
}

export default ShopPage;
