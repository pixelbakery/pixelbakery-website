import React, { Component } from "react";
import PropTypes from "prop-types";
// import stripHtml from "string-strip-html";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart() {
    this.props.onAddToCart(this.props.product.id, 1);
  }
  render() {
    const { product } = this.props;
    const strippedString = product.description.replace(/(<([^>]+)>)/gi, "");
    return (
      <article className='col-span-1 w-full '>
        <div className=' rounded-lg overflow-hidden aspect-w-4 aspect-h-3'>
          <img
            className='product__image'
            src={product.image.url}
            alt={product.name}
          />
        </div>
        <div className='product__info'>
          <h2 className='text-pink-light mt-3 text-2xl'>
            {product.name} – {product.price.formatted_with_symbol}{" "}
          </h2>
        </div>
        <button
          name='Add to cart'
          className='product__btn'
          onClick={this.handleAddToCart}
        >
          Quick add
        </button>
      </article>
    );
  }
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
  handleAddToCart: PropTypes.func,
};
