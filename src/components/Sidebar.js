import React from 'react'
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="sidebar">
        <div className="home" onClick={() => navigate("/legoList")}>        
        <div className="homeText">
            Home
        </div>
    </div>
    <div className="cart">
        <div className="cartText">
            To the cart
        </div>
    </div>
    </div>
    );
};

export default Sidebar