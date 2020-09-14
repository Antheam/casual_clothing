import React from "react";

import MenuItem from "../Menu-item/Menu-item";

import "./Directory.scss";
import { render } from "@testing-library/react";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/KhxkS2H/hats.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/WFCWkYd/jackets.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/vPrHgM3/shoes.jpg",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/nztjqx8/women.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/7VRv4YQ/men.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
