// @ts-nocheck
import React, { useEffect, useState } from "react";
import OpenI from "../../../assets/imgs/icons/plus.svg";
import CloseI from "../../../assets/imgs/icons/minus.svg";
import "./Filters.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../services/redux/store";
import { fetchCategories } from "../../../services/actions";

const Filters = ({chosenCategories, setChosenCategories, filterProducts, products}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleCheck = (event) => {
    if (event.target.checked) {
      setChosenCategories([...chosenCategories, event.target.name])
    } else {
      setChosenCategories(chosenCategories.filter(cat => cat !== event.target.name));
    }
  };

  return (
    <div className="filtersSection">
      <div className="filterName">
        <p>Brend</p>{" "}
        <img
          src={openFilter ? CloseI : OpenI}
          alt=""
          onClick={() => setOpenFilter((prev) => !prev)}
        />
      </div>
      {openFilter && (
        <div className="filters">
          <label className="container">
            <input type="checkbox" 
            onChange={handleCheck} name="apple"/>
            Apple
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" onChange={handleCheck} name="samsung"/>
            Samsung
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" onChange={handleCheck} name="xiaomi"/>
            Xiaomi
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" onChange={handleCheck} name="redmi"/>
            Redmi
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" onChange={handleCheck} name="qulaqliqlar"/>
            Qulaqliqlar
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" onChange={handleCheck} name="smart-saatlar"/>
            Smart saatlar
            <span className="checkmark"></span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Filters;
