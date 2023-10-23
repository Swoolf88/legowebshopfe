import React, { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from './Sidebar';
import Footer from './Footer';

function AddLego() {
    const ref = useRef();

    const [lego, setLego] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        image: "",
    });

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setLego({...lego, [e.target.name]: value});
    };

    const reset = (e) => {
        e.preventDefault();
        setLego({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        image: "",
        });
        clearFileInput();
    }; 
    
      const handleUploadFile = (e) => {
        setImageUrl(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
      }

      const fileInputRef = useRef(null);

      const clearFileInput = () => {
        // Reset the input element by setting its value to an empty string
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };

      function saveLegoFile(e) {         
        e.preventDefault();
        const data = new FormData();
        data.append('image', image);
        data.append('firstName', lego.firstName);
        data.append('lastName', lego.lastName);
        data.append('emailId', lego.emailId);   
        axios.post('http://localhost:8080/api/v1/addLego', data).then((response) => {
            console.log(response); // do something with the response
          });
        navigate(`/legoList`);
      }
      
      const goBack = (e) => {
        navigate(`/legoList`);
      }

    return (    
        <> 
        <Sidebar></Sidebar>
        <div className="flex max-w-2x1 mx-auto shadow border-b">        
            <div className="addNewLegoContainer px-8 py-8">             
                <div className="font-thin text-2xl tracking-wider">                
                    <div className="addNewLegoText">                    
                    <h1>Add New Lego</h1>
                    </div>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal" >
                        First Name
                    </label>
                    <input type="text"
                            name="firstName"
                            value={lego.firstName}
                            onChange={(e) => handleChange(e)}
                            className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal" >
                        Last Name
                    </label>
                    <input type="text"
                           name="lastName"
                           value={lego.lastName}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal" >
                        Email
                    </label>
                    <div className="emailInput">
                    <input type="text"
                           name="emailId"
                           value={lego.emailId}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                           </div>
                </div>
                <form> 
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <div className="selectFileContainer">
                        <label htmlFor="image" className="selectFileButton block text-gray-600 text-sm font-normal" >
                            Select file
                        </label>                    
                        <input 
                        className="selectFileButtonInput"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleUploadFile}/>                        
                    </div>
                    <div className="imagePreview">
                        <img src={imageUrl} width="150" height="150"/>
                    </div>
                 <div className="addButtonContainer buttons py-4 space-x-4">
                  <button 
                    onClick={saveLegoFile} 
                    className="background-image-container rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                       <div className = "addLegoText">
                        Save
                       </div>
                   </button>                           
                   <button 
                   onClick={reset}
                   className="background-image-container rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                       <div className = "addLegoText">
                        Clear
                       </div>
                   </button>
                   <button 
                    onClick={goBack} 
                    className="background-image-container rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6">
                       <div className = "addLegoText">
                        Back
                       </div>
                   </button>
                   </div>
                </div>
                </form>
            </div>
            <div className="footerContainer">
            <Footer></Footer> 
            </div>
        </div>
        </>
    );
}

export default AddLego
