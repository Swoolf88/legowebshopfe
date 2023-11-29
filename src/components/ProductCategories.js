import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function ProductCategories() {
  const ref = useRef();

  const [lego, setLego] = useState({
    id: "",
    firstName: "",
    lastName: "",
    likeId: "",
    emailId: "",
    image: "",
  });

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setLego({ ...lego, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setLego({
      id: "",
      firstName: "",
      lastName: "",
      likeId: "",
      emailId: "",
      image: "",
    });
    clearFileInput();
  };

  const handleUploadFile = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const fileInputRef = useRef(null);

  const clearFileInput = () => {
    // Reset the input element by setting its value to an empty string
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  function saveLegoFile(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("firstName", lego.firstName);
    data.append("lastName", lego.lastName);
    data.append("likeId", 0);
    data.append("emailId", lego.emailId);
    axios
      .post("http://localhost:8080/api/v1/addLego", data)
      .then((response) => {
        console.log(response); // do something with the response
      });
    navigate(`/legoList`);
  }

  const goBack = (e) => {
    navigate(`/legoList`);
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
                value={lego.firstName}
                onChange={(e) => handleChange(e)}
                className="inputProductCategories">
	      </input>
            </div>
                <div className="productCategoriesButtonContainer">
                  <button
                    onClick={saveLegoFile}
                    className="addButtonProductCategories">
                    <div className="addProductCategoriesText">Add</div>
                  </button>
                  <button
                    onClick={saveLegoFile}
                    className="editButtonProductCategories">
                    <div className="editProductCategoriesText">Edit</div>
                  </button>
                  <button
                    onClick={saveLegoFile}
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
