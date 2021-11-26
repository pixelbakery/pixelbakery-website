import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <>
        <div className='products' id='products'>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array,
};
