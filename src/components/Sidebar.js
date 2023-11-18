import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import imageToCart from "../assets/images/basket.jpg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="home" onClick={() => navigate("/legoList")}>
        <div className="homeText">Home</div>
      </div>
      <div className="cart">
        <div className="cartText" onClick={() => navigate("/cart")}>
          To the cart
        </div>
        <img
          className="basketIconToCart"
          src={imageToCart}
          width="25"
          height="25"
        />
      </div>
      <div className="addNewLegoContainerButton">
        <div className="addNewLegoContainerButtonText" onClick={() => navigate("/addLego")}>
            Add Lego
        </div>
      </div>
      <div className="productCategories" onClick={() => navigate("/productCategories")}>
        <div className="productCategoriesText">Product categories</div>
      </div>
      <div className="ourPartners" onClick={() => navigate("/ourPartners")}>
        <div className="ourPartnersText">Our partners</div>
      </div>
    </div>
  );
};

export default Sidebar;
