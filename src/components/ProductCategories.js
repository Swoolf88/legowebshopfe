import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function ProductCategories() {

  const ref = useRef();

  const [productCategories, setProductCategories] = useState({
    id: "",
    productCategories: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setProductCategories({ ...productCategories, [e.target.name]: value });
  };

  function addProductCategories(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("productCategories", productCategories.productCategories);
    axios
      .post("http://localhost:8080/api/v1/productCategories", data)
      .then((response) => {
        console.log(response); // do something with the response
      });
  }

const deleteProductCategories = (e, id) => {
        e.preventDefault();
        axios
      .delete("http://localhost:8080/api/v1/productCategories/" + id)
      .then((response) => {
            if(productCategories) {
                setProductCategories((prevElement) => {
                    return prevElement.filter((productCategories) => productCategories.id !== id);
                });
            }
        });
    };

const editProductCategories = (e, id) => {
    e.preventDefault();
    const data = new FormData();
        data.append("productCategories", productCategories.productCategories);
        axios.put("http://localhost:8080/api/v1/productCategories/" + id, data).then((response) => {
          console.log(response); // do something with the response
        });
};


  return (
    <>
      <Sidebar></Sidebar>
        <div className="productCategoriesContainer">
              <div className="productCategoriesHeaderText">Product Categories</div>
            </div>
          <div className="inputAddProductCategoriesContainer">
              <label className="productCategoriesLabel">
                Product Categories
              </label>
              <input
                type="text"
                name="productCategories"
                value={productCategories.productCategories}
                onChange={(e) => handleChange(e)}
                className="inputProductCategories">
	      </input>
            </div>
                <div className="productCategoriesButtonContainer">
                  <button
                    onClick={addProductCategories}
                    className="addButtonProductCategories">
                    <div className="addProductCategoriesText">Add</div>
                  </button>
                  <button
                    onClick={editProductCategories}
                    className="editButtonProductCategories">
                    <div className="editProductCategoriesText">Edit</div>
                  </button>
                  <button
                    onClick={deleteProductCategories}
                    className="deleteButtonProductCategories">
                    <div className="deleteProductCategoriesText">Delete</div>
                  </button>
                </div>
        <div className="footerContainerProductCategories">
          <Footer></Footer>
        </div>
    </>
  );
}

export default ProductCategories;
