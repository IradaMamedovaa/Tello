// @ts-nocheck
import React from "react";
import Arrow from "../../assets/imgs/icons/arrow.svg";
import { useParams } from "react-router-dom";
import "./Breadcrumb.scss"
import { Link } from "react-router-dom";

const Breadcrumb = ({product}) => {
  const params = useParams();
  return (
    <div className="breadcrumb">
      <p>
        <Link to="/"> Ana səhifə</Link>
        <img src={Arrow} alt="arrow" />
        <Link to={`/products/`}>Telefon və Aksessuarlar</Link> 
        
          {params.category && (

            <Link to={`/products/${params.category}`}>
              <img src={Arrow} alt="arrow" />
              {params.category} 
            </Link>
          )}
        
        {params.id && <Link to={`/products/${params.category}/${product.id}`} className="prodName"><img src={Arrow} alt="arrow" /> {product?.name }</Link> }
        </p>
    </div>
  );
};

export default Breadcrumb;
