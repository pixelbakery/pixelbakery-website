import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function ProductCard({ product, price, url, previewImg }) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Link to={url} className=''>
      <article className='col-span-1 w-full '>
        <div className=' rounded-lg overflow-hidden aspect-w-4 aspect-h-3'>
          <img
            src={previewImg}
            alt="Pixel Bakery Black Mug that says 'i love you'"
            className='absolute object-cover object-center w-100 h-100'
          />
        </div>
        <h2 className='text-pink-light mt-3 text-2xl'>
          {product} – ${price}
        </h2>
      </article>
    </Link>
  );
}

export default ProductCard;
