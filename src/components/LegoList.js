import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LegoService from '../services/LegoService';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import imageAdd from '../assets/images/basket.jpg';

const LegoList = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [legos, setLegos] = useState(null);
    const [legoItemList, setLegoItemList] = useState([]);
    var imageUrl = "";

    const deleteLego = (e, id) => {
        e.preventDefault();
        LegoService.deleteLego(id).then((res) => {
            if(legos) {
                setLegos((prevElement) => {
                    return prevElement.filter((lego) => lego.id !== id);
                });
            }
        });
        navigate(`/legoList`);
    };

    const getLegoItems = async () => {
      axios.get("http://localhost:8080/api/v1/legos").then((response) => {
        setLegoItemList(response.data);
        setImage(legoItemList.image);     
      });
    };
    
    imageUrl = 'http://localhost:8080/api/v1/';

    useEffect(() => {
      getLegoItems();
    }, []);

    const editLego = (e, id) => {
      e.preventDefault();
      navigate(`/editLego/${id}`);
  };

    return (
        <>
          <Sidebar></Sidebar>        
       <div className="legoListContainer mx-auto my-8">
       <div className="scrollbar">
       <div className="flex shadow border-b">
           <div className="tablelego mx-0 my-0">               
               <div className="bg-white grid gap-0 py-0 grid-cols-3 grid-rows-3">
                   <>
                    <div className="legoDataText">
                    {legoItemList?.map((val, key) => {
                      return (
                        <>              
                        <div  key={val.id} className="legoContainerText">
                            <p className="imageText"></p>
                            {imageUrl + val.image ? (
                                <img src={imageUrl + val.image} alt="Database Image" width="120em" height="120em" />
                              ) : (
                                <p>Loading image...</p>
                              )}
                            <p className="descriptionText">{val.firstName}</p>
                            <p className="priceText">{val.lastName}</p>
                             <div className="text-left px-2 py-0 whitespace-nowrap font-medium text-sm">
                         <div className="editDeleteButtonContainer">
                         <div className="editButton">
                          <button onClick={(e, id) => editLego(e, val.id)}
                            className="background-image-container text-indigo-600 hover:text-indigo-800 px-4 py-0 hover:cursor-pointer">
                              <div className="editButtonText">
                                Edit
                              </div>
                          </button>
                        </div>
                          <div className="deleteButton">
                            <button
                              onClick={(e, id) => deleteLego(e, val.id)}
                              className="background-image-container text-red-600 hover:text-red-800 py-0 hover:cursor-pointer">
                              <div className="deleteButtonText">
                                Delete 
                              </div>
                            </button> 
                          </div>
                          <div className="addToCartButton">                          
                            <button onClick={() => navigate("/cart") } 
                              className="background-image-container h2" text="Some text" color="white" verticalalignment="center"
                              horizontalalignment="center">                                
                                <div className="addToCartButtonText">                                  
                                Add to cart
                                </div>
                              <img className="basketIcon" src={imageAdd} width="25" height="25"/>
                            </button>
                          </div>                            
                        </div>
                      </div> 
                    </div> 
                  </>
                      );
                    })}
                  </div>
                   {/* {legos?.map((lego) => {
                    return(
                        <>
                        C
                        <Lego 
                        lego={lego} 
                        deleteLego={deleteLego} 
                        key={lego.id}></Lego>
                        <div>{lego}</div>
                        </>
                   )})} */}
                   </>
               </div>           
           </div>
       </div>
       </div>      
       </div>
       <Footer></Footer>
       </>
    );
};

export default LegoList
