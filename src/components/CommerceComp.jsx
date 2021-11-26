import React, { Component } from "react";
import { commerce } from "../lib/commerce";
import ProductsList from "./ProductsList";

class ProductFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data });
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }

  render() {
    const { products } = this.state;

    return <ProductsList products={products} />;
  }
}

export default ProductFeed;
