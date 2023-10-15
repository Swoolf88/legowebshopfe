import React from 'react'
import '../index.css';
import logo from '../image/legoscrollbar.jpg';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="sidebar">
        <div className="home" onClick={() => navigate("/legoList")}>
        
        Home
    </div>
    <div className="cart">
        <div className="cartText">
            To the cart
        </div>
    </div>
   <div className="logo">
      <img src={logo} width="150" height="750" />
    </div> 
    </div>
    );
};

export default Sidebar