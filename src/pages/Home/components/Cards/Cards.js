import React from 'react'
import { Link } from "react-router-dom";
import "./Cards.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Cards({title,count,link,image,classn}) {
  return (
    <div className={classn}>
        <div className="text">
            <h4>{title}</h4>
            <p>Məhsul Sayı: <span>{count}</span></p>
            <Link to={link}>Məhsullara keçid  </Link>
        </div>
        <img src={image} alt="logo"/>
    </div>
  )
}

export default Cards