import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import MugBlack from "../img/store/pixelbakery-mug-black.webp";
import products from "../data/store-products";
import ProductCard from "../components/pg-store/store-product-card";
function Store() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <main>
      <section id='store' className='my-4 bg-blue-dark py-40'>
        <div className='mx-auto max-w-6xl'>
          <h1 className='text-pink mb-20 '>Company Shop</h1>
          <div className=' grid grid-cols-3 mt-8 gap-12'>
            {products.map((product) => (
              // <ComponentName prop1={prop1Input} key={dataItem.identifier} />
              <ProductCard
                product={product.product}
                url={product.url}
                previewImg={product.previewImg}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Store;
