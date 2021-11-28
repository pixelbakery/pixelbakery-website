import React, { Component } from 'react'
import { commerce } from '../lib/Commerce'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductsList from '../components/ProductsList'

library.add(faShoppingBag, faTimes)

class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      merchant: {},
      products: [],
      cart: {},
      isCartVisible: false,
    }

    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    this.handleEmptyCart = this.handleEmptyCart.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
  }

  componentDidMount() {
    this.fetchMerchantDetails()
    this.fetchProducts()
    this.fetchCart()
  }

  /**
   * Show hide cart in nav
   */
  toggleCart() {
    const { isCartVisible } = this.state
    this.setState({
      isCartVisible: !isCartVisible,
    })
  }

  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */
  fetchMerchantDetails() {
    commerce.merchants
      .about()
      .then((merchant) => {
        this.setState({ merchant: merchant })
      })
      .catch((error) => {
        console.log('There was an error fetch the merchant details', error)
      })
  }

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data })
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error)
      })
  }

  /**
   * Retrieve the current cart or create one if one does not exist
   * https://commercejs.com/docs/sdk/cart
   */
  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart: cart })
      })
      .catch((error) => {
        console.error('There was an error fetching the cart', error)
      })
  }

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */
  handleAddToCart(productId, quantity) {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        this.setState({ cart: item.cart })
      })
      .catch((error) => {
        console.error('There was an error adding the item to the cart', error)
      })
  }

  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} newQuantity New line item quantity to update
   */
  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        this.setState({ cart: resp.cart })
      })
      .catch((error) => {
        console.log('There was an error updating the cart items', error)
      })
  }

  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */
  handleRemoveFromCart(lineItemId) {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        this.setState({
          cart: resp.cart,
        })
      })
      .catch((error) => {
        console.error('There was an error removing the item from the cart', error)
      })
  }

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  handleEmptyCart() {
    commerce.cart
      .empty()
      .then((resp) => {
        this.setState({ cart: resp.cart })
      })
      .catch((error) => {
        console.error('There was an error emptying the cart', error)
      })
  }

  renderCartNav() {
    const { cart, isCartVisible } = this.state

    return (
      <div className='nav'>
        <div className='nav__cart' onClick={this.toggleCart}>
          {!isCartVisible ? (
            <button className='nav__cart-open'>
              <FontAwesomeIcon size='2x' icon='shopping-bag' color='#292B83' />
              {cart !== null ? <span>{cart.total_items}</span> : ''}
            </button>
          ) : (
            <button className='nav__cart-close'>
              <FontAwesomeIcon size='1x' icon='times' color='white' />
            </button>
          )}
        </div>
      </div>
    )
  }

  render() {
    const { products, merchant, cart, isCartVisible } = this.state

    return (
      <main>
        <section id='store' className='my-4 bg-blue-dark py-40'>
          <div className='mx-auto max-w-6xl'>
            <h1 className='text-pink mb-20 '>Company Shop</h1>
            {this.renderCartNav()}
            {isCartVisible && (
              <Cart
                cart={cart}
                onUpdateCartQty={this.handleUpdateCartQty}
                onRemoveFromCart={this.handleRemoveFromCart}
                onEmptyCart={this.handleEmptyCart}
              />
            )}

            <ProductsList products={products} onAddToCart={this.handleAddToCart} />
          </div>
        </section>
        <Switch>
          <Route
            path='/store/checkout'
            exact
            render={(props) => {
              return null
              // <Checkout {...props} cart={cart} onCaptureCheckout={this.handleCaptureCheckout} />
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default Store

//   render() {
//

//     return (
//
//
//
//
//

//
//           </div>
//         </section>
//       </main>
//     );
//   }
// }

// import React, { useEffect } from "react";

// import ProductCard from "../components/pg-store/store-product-card";
// function Store() {
//   useEffect(() => {
//     return () => {};
//   }, []);

//   return (
//
//
//
//
//
//             {products.map((product) => (
//               // <ComponentName prop1={prop1Input} key={dataItem.identifier} />
//               <ProductCard
//                 product={product.product}
//                 url={product.url}
//                 previewImg={product.previewImg}
//                 price={product.price}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Store;
