import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      // Shuffle the products array
      const shuffledProducts = [...allProducts].sort(() => 0.5 - Math.random());
      // Pick the first 5 products
      setRandomProducts(shuffledProducts.slice(0, 5));
    }
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {randomProducts.length > 0 &&
            randomProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
