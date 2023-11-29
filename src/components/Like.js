import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LegoService from "../services/LegoService";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";
import heartFull from "../assets/images/heartfull.jpg";
import heartEmpty from "../assets/images/heartempty.jpg";

const Like = () => {
  const navigate = useNavigate(false);
  const [like, setLike] = useState();
  const [legoItemList, setLegoItemList] = useState([]);
  const {id} = useParams();
  const [image, setImage] = useState();

  const getLikes = async () => {
    axios.get("http://localhost:8080/api/v1/legos").then((response) => {
      setLegoItemList(response.data);
      setLike(legoItemList.like);
    });
  };

  function putLikes(e) {
	setLike((prevLike) => !prevLike)
    e.preventDefault();
    const data = new FormData();
        data.append("like", 1);
        // '/files' is your node.js route that triggers our middleware
        axios.put("http://localhost:8080/api/v1/legos/" + 5, data).then((response) => {
          console.log(response); // do something with the response
        });
};

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <div className="likeLego">
        <img
          src={like ? heartFull : heartEmpty}
          width="25"
          height="25"
          onClick={putLikes}
        />
      </div>
    </>
  );
};

export default Like;
