// @ts-nocheck
import React from "react";
import "./CategorizedProducts.scss";
import Arrow from "../../../../assets/imgs/icons/arrow.svg";
import Product from "../../../../layouts/Product/Product";
import { Link } from "react-router-dom";

const CategorizedProducts = ({ categoryName, products, slug }) => {
  return (
    <div className="CategorizedProducts">
      <div className="categoryTitle">
        <p>{categoryName}</p>
      </div>
      <Link to={`/products/${slug}`} className="seeAllBtn">
        <p>Hamısına bax</p> <img src={Arrow} alt="arrow" />
      </Link>
      <div className="products">
        {products?.map((product) => (
          
          <Product
          id={product?.id}
            key={Math.random()}
            name={product?.name}
            img={product?.assets[0]?.url}
            price={product?.price?.raw}
            slug = {slug}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorizedProducts;
