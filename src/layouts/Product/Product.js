// @ts-nocheck
import React from 'react'
import "./Product.scss"
import AznSymbol from '../../assets/imgs/icons/aznSymbol.svg'
import { Link } from 'react-router-dom'

const Product = ({img,name,price, slug,id}) => {
  
  return (
    <Link to={`/products/${slug}/${id}`} className='productCard'>
        <div className="productImg">
            <img src={img} alt="product img" />
        </div>
        <p className='productName'>{name}</p>
        <p className='price'>{price} <img className='aznSymbol' src={AznSymbol} alt="" /></p>
    </Link>
  )
}

export default Product