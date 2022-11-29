// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/redux/store";
import { retrieveProduct } from "../../services/actions"; 
import ImageSlider from "./components/ImageSlider/ImageSlider";
import About from "./components/About/About";
import './ProductPage.scss'
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { PropagateLoader } from "react-spinners";
import Breadcrumb from "../../layouts/Breadcrumb/Breadcrumb";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(false)
  const product = useSelector(
    (state) => state.productDetails.productDetails
  );
  const loader = useSelector(
    (state) => state.productDetails.loading
  );
  useEffect(() => {
    dispatch(retrieveProduct(params.id));
  }, []);
  
  return (
    <div className="product">
      <Breadcrumb product={product}/>
      {loader ? (
        <div className="loader"><PropagateLoader color="#2DD06E"/></div>
        
      ) : (
        <div>
          <div className="img-details">
          <ImageSlider images={product?.assets}  selectedImg={selectedImg}/>
          <ProductDetails id={params.id} productDetails={product} setSelectedImg={setSelectedImg}/>
          </div>
          <About description={product.description} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
