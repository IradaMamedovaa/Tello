// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Copyrights from "../../assets/imgs/icons/copyright.svg" ;
import Logo from "../../assets/imgs/icons/logo.svg";
import Instagram from "../../assets/imgs/icons/instagram.svg";
import Facebook from "../../assets/imgs/icons/facebook.svg";
import Youtube from "../../assets/imgs/icons/youtube.svg";
import Twitter from "../../assets/imgs/icons/twitter.svg";
import LocationIcon from "../../assets/imgs/icons/locationIcon.svg";
import EmailIcon from "../../assets/imgs/icons/email.svg";
import PhoneIcon from "../../assets/imgs/icons/phone.svg";


const Footer = () => {
  return (
    <div className="pageFooter">
      <footer>
        <div className="column">
          <img src={Logo} alt="tello logo" className="footerLogo" />
          <div className="socials">
            <div><img src={Instagram} alt="Instagram" /></div>
            <div><img src={Facebook} alt="Facebook" /></div>
            <div><img src={Youtube} alt="YouTube" /></div>
            <div><img src={Twitter} alt="Twitter" /></div>
          </div>
        </div>
        <div className="column">
          <h6>Menu</h6>
          <p>Yeni</p>
          <p>Endirimlər</p>
          <p>Aksessuarlar</p>
          <p>Bütün brendlər</p>
        </div>
        <div className="column">
          <h6>Kömək</h6>
          <p>Tez-tez soruşulan suallar</p>
          <p>Çatdırılma xidməti</p>
          <p>Geri qaytarılma şərtləri</p>
        </div>
        <div className="column">
          <h6>Əlaqə</h6>
          <p>
            <img src={LocationIcon} alt="LocationIcon" />
            M. K. Ataturk avenue 89, Baku, <br /> Azerbaijan
          </p>
          <p>
            <img src={EmailIcon} alt="EmailIcon" />
            example@gmail.com
          </p>
          <p>
            <img src={PhoneIcon} alt="PhoneIcon" />
            *2108
          </p>
        </div>
      </footer>
      <div className="footerChild">
        <div className="privacyAndPolicy">
          <Link to="/">Qaydalar və şərtlər</Link>
          <Link to="/">Məxfilik siyasəti</Link>
        </div>
        <p className="copyrights">
          <img src={Copyrights} alt="Copyrights Icon" /> Tello 2021. Bütün
          hüquqlar qorunur.
        </p>
      </div>
    </div>
  );
};

export default Footer;
