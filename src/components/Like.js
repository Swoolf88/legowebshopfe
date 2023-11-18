import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LegoService from '../services/LegoService';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import heartFull from '../assets/images/heartfull.jpg';
import heartEmpty from '../assets/images/heartempty.jpg';
const LegoList = () => {
    const navigate = useNavigate();
    const [like, setLike] = useState();

    const getLikes = async () => {
        axios.get("http://localhost:8080/api/v1/like").then((response) => {
            setLike(response.data);
        });
    };

    const putLikes = async () => {
        axios.put("http://localhost:8080/api/v1/like").then((response) => {
            setLike(response.data);
        });
    };
    
    useEffect(() => {
        getLikes();
    }, []);
   
    return (
        <>
                <div className="likeLego">
                <img src={heartFull} width="150" height="150" /> 
                     </div>
                                                </>
                                            );
                                        }

export default LegoList
