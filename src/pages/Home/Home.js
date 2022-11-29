// @ts-nocheck
import React, { useEffect } from "react";
import "./Home.scss";
import AdsSection from "./components/AdsSection/AdsSection";
import HighlightedProduct from "./components/HighlightedCards/HighlightedCards";
import Advantages from "./components/Advantages/Advantages";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/redux/store";
import { fetchProducts } from "../../services/actions";
import CategorizedProducts from "./components/CategorizedProducts/CategorizedProducts";
import Rectangle1 from "../../assets/imgs/Rectangle1.svg";
import Rectangle2 from "../../assets/imgs/Rectangle2.svg";
import arrayShuffle from "array-shuffle";
import Cards from "./components/Cards/Cards";
import PhoneImg from "../../assets/imgs/xiaomi-card.png"
import WatchImg from "../../assets/imgs/watch-card.png"
import IphoneImg from "../../assets/imgs/iphone-card.png"
import { PropagateLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.products
  );
  const loader = useSelector(
    (state) => state.products.loading
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categorizeProducts = (array, category) => {
    return array.filter((product) =>
      product.categories.filter((item) => item.slug == category).length != 0
    );
  };


  return (
    <div className="home">
      
      <HighlightedProduct />
      {loader ? <div className="loader"><PropagateLoader color="#2DD06E"/></div> : <CategorizedProducts
        products={products && arrayShuffle(products)?.slice(0, 4)}
        categoryName={"Ən çox satılan məhsullar"}
        slug = "yeni"
      />}
      
      {loader ? <div className="loader"><PropagateLoader color="#2DD06E"/></div> : <CategorizedProducts
        products={products && categorizeProducts(products,'yeni').slice(0, 4)}
        categoryName={"Yeni gələn məhsullar"}
        slug="yeni"
      />}
      
      
      <div className="productAdd">
        <div><img src={Rectangle1} alt="" /></div>
        <div><img src={Rectangle2} alt="" /></div>
        
      </div>{loader ? <div className="loader"><PropagateLoader color="#2DD06E"/></div> : <CategorizedProducts
        products={products && categorizeProducts(products,'aksessuarlar').slice(0, 4)}
        categoryName={"Yeni gələn aksessuarlar"}
        slug="aksessuarlar"
      />}
      
      <div className="link-card">
        <div className="col1">
        <Cards link={`products/xiaomi`} count={products && categorizeProducts(products,'xiaomi').length} image={PhoneImg} title={"Telefon"} classn={"phone-card cards"}/></div>
        <div className="col2">
        <Cards  link={"products/smart-saatlar"} count={products && categorizeProducts(products,'smart-saatlar').length} image={WatchImg} title={"Smart Saat"} classn={"watch-card cards"}/>
        <Cards  link={"products/aksessuarlar"} count={products && categorizeProducts(products,'aksessuarlar').length} image={IphoneImg} title={"Aksessuar"} classn={"iphone-card cards"}/>
        </div>
    </div>
      <Advantages />
      <AdsSection />
    </div>
  );
};

export default Home;
