// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/redux/store";
import { fetchProducts } from "../../services/actions";
import Product from "../../layouts/Product/Product";
import "./Products.scss";
import { PropagateLoader } from "react-spinners";
import Breadcrumb from "../../layouts/Breadcrumb/Breadcrumb";
import Filters from "./FilterSection/Filters";

const Products = () => {
  const params = useParams();
  const [chosenCategories, setChosenCategories] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.products
  );
  const loader= useSelector((state) => state.products.loading);

  useEffect(() => {
    params.category && dispatch(fetchProducts(params.category));
    !params.category && dispatch(fetchProducts());
  }, [dispatch,params]);

  const [filteredProducts, setFilteredProducts] = useState(false);
  useEffect(() => {
    filterProducts(products, chosenCategories)
  }, [chosenCategories, products])
  const filterProducts = (products, chosenCategories) => {
    if (chosenCategories.length > 0) {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.categories.filter((item) =>
              chosenCategories.includes(item.slug)
            ).length !== 0
        )
      );
    } else {
      setFilteredProducts(false);
    }
  };

  return (
    <div className="productsPage">
      <Breadcrumb product={false} />
      <div className="productsMain">
        <div>
          <Filters
            setChosenCategories={setChosenCategories}
            chosenCategories={chosenCategories}
            filterProducts={filterProducts}
            products={products}
          />
        </div>
        <div>
          <div className="productsHeader">
            <div className="resultCount">
              {!loader
                ? filteredProducts
                  ? filteredProducts?.length
                  : products?.length || 0
                : "_"}{" "}
              məhsul tapıldı
            </div>
            <div className="sortBy"></div>
          </div>
          {loader ? (
            <div className=" products loader">
              <PropagateLoader color="#2DD06E" />
            </div>
          ) : (
            <div className="products">
              {filteredProducts
                ? filteredProducts?.map((product) => (
                    <Product
                      id={product?.id}
                      slug={params.category}
                      key={Math.random()}
                      name={product?.name}
                      img={product?.assets[0]?.url}
                      price={product?.price?.raw}
                    />
                  ))
                : products?.map((product) => (
                    <Product
                      id={product?.id}
                      slug={params.category}
                      key={Math.random()}
                      name={product?.name}
                      img={product?.assets[0]?.url}
                      price={product?.price?.raw}
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
