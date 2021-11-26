import React, { Component } from "react";
import { commerce } from "../lib/Commerce";
import ProductsList from "../components/ProductsList";

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

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-router-dom";
// import MugBlack from "../img/store/pixelbakery-mug-black.webp";
// import products from "../data/store-products";
// import ProductCard from "../components/pg-store/store-product-card";
// function Store() {
//   useEffect(() => {
//     return () => {};
//   }, []);

//   return (
//     <main>
//       <section id='store' className='my-4 bg-blue-dark py-40'>
//         <div className='mx-auto max-w-6xl'>
//           <h1 className='text-pink mb-20 '>Company Shop</h1>
//           <div className=' grid grid-cols-3 mt-8 gap-12'>
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
