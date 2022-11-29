// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/imgs/icons/logo.svg";
import Search from "../../assets/imgs/icons/search.svg";
import Account from "../../assets/imgs/icons/account.svg";
import FavIcon from "../../assets/imgs/icons/favIcon.svg";
import Basket from "../../assets/imgs/icons/basket.svg";
import Menu from "../../assets/imgs/icons/menu.svg";
import Arrow from "../../assets/imgs/icons/arrow.svg";
import Close from "../../assets/imgs/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../services/actions";
import { AppDispatch, RootState } from "../../services/redux/store";
import { BiArrowBack } from "react-icons/bi";
import Product from "../Product/Product";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleNavbarMenu = () => setOpenMenu(!openMenu);
  const [subCategories, setSubCategories] = useState();
  const [searchRes, setSearchRes] = useState(null);
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.categories.categories
  );
  const products = useSelector(
    (state) => state.products.products
  );
  
  const {items} = useSelector(
    (state) => state.cart
  )

  console.log(items);
  

  const handleSearch = (e) => {
    if (e.trim().length != 0) {
      setSearchRes(
        products
          ?.filter((prod) =>
            prod?.name?.toLowerCase()?.includes(e.toLowerCase())
          )
          ?.slice(0, 3)
      );
    } else {
      setSearchRes(null);
    }
  };

  const onMouseOver = (subcategories) => {
    if (openMenu) {
      if (subCategories) {
        setSubCategories(null);
        setOpenMenu(false);
        return;
      }
      setSubCategories(subcategories);
    } else {
      if (subCategories) {
        setSubCategories(null);
        setOpenMenu(false);
      }
      setSubCategories(subcategories);
    }
  };
  const onMouseOut = () => {
    setSubCategories(null);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="headerContainer">
      <header>
        <div className="menuAndLogo">
          {openMenu ? (
            <div>
              {subCategories ? (
                <BiArrowBack onClick={onMouseOut} />
              ) : (
                <img
                  src={Close}
                  alt="Close Menu"
                  className="menu closeBtn"
                  onClick={handleNavbarMenu}
                />
              )}
            </div>
          ) : (
            <img
              src={Menu}
              alt="Menu"
              className="menu"
              onClick={handleNavbarMenu}
            />
          )}
          <Link to="/">
            <img src={Logo} alt="" className="headerLogo" />
          </Link>
        </div>
        <div className="header-right">
          {/* <Link to="#">
            <img src={Account} alt="Account" />
          </Link> */}
          {/* <Link to="#">
            <img src={FavIcon} alt="Favourites" />
          </Link> */}
          <Link to="/cart">
            <div className="basket">
              <img src={Basket} alt="basket" />
              {items?.total_items!=0 && <div className="basketProducts">{items?.total_items}</div>}
            </div>
          </Link>
        </div>
        <div className={openMenu ? "search hide-search" : "search"}>
          <img src={Search} alt="Search icon" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Axtarış..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="searchResult">
          {searchRes?.length > 0 &&
            searchRes.map((product) => (
              <div onClick={() => setSearchRes(null)} key={Math.random()}>
                <Product
                  id={product?.id}
                  key={Math.random()}
                  name={product?.name}
                  img={product?.assets[0]?.url}
                  price={product?.price?.raw}
                  slug={product.categories[0].slug}
                />
              </div>
            ))}
          {searchRes?.length === 0 && (
            <div className="noResult">
              {" "}
              <p>{`Axtarışınıza uyğun məhsul tapılmadı :( `}</p>
            </div>
          )}
        </div>
      </header>
      <div
        className={
          openMenu ? "navbar-categories open-menu" : "navbar-categories"
        }
      >
        <div className="categories">
          {categories?.map((category) => (
            <Link
              to={`/products/${category.slug}`}
              key={Math.random()}
              onMouseEnter={() => onMouseOver(category?.children)}
              onMouseLeave={onMouseOut}
            >
              {category?.name}
              <img src={Arrow} alt="arrow" className="arrowIcon" />
            </Link>
          ))}
        </div>
        <div className="menuBtns">
          <button className="loginBtn">Daxil ol</button>
          <button className="signupBtn">Qeydiyyat</button>
        </div>
      </div>
      <div
        className={subCategories ? "subMenu openSub" : "subMenu"}
        onMouseLeave={onMouseOut}
        onMouseEnter={() => onMouseOver(subCategories)}
      >
        {subCategories &&
          subCategories?.map((subcategory) => (
            <Link
              to={`/products/${subcategory.slug}`}
              key={Math.random()}
              className="subCat"
            >
              {subcategory?.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Header;
