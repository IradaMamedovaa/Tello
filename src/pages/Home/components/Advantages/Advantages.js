import React from "react";
import "./Advantages.scss";
import BoxIcon from "../../../../assets/imgs/icons/box.svg";
import CardIcon from "../../../../assets/imgs/icons/card-pos.svg";
import MedalStar from "../../../../assets/imgs/icons/medal-star.svg";

const Advantages = () => {
  return (
    <div className="advantages">
      <div>
        <img src={BoxIcon} alt="" />
        <p className="card-title">Çatdırılma</p>
        <p className="card-info">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
      <div>
        <img src={CardIcon} alt="" />
        <p className="card-title">Kredit</p>
        <p className="card-info">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
      <div>
        <img src={MedalStar} alt="" />
        <p className="card-title">Zəmanət</p>
        <p className="card-info">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
    </div>
  );
};

export default Advantages;
