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

    const [image, setImage] = useState();

    const [blobImage, setBlobImage] = useState();

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
        ref.current.value = "";
    }; 
    
      const handleUploadFile = (e) => {
        setImage({ image: e.target.files[0] });
      }

      function saveLegoFile(e) {         
        e.preventDefault();
        let data = new FormData();
        const blob = new Blob([image]);
        setBlobImage({blobImage : blob});
        data.append('image', blob);
        data.append('firstName', lego.firstName);
        data.append('lastName', lego.lastName);
        data.append('emailId', lego.emailId);   
        axios.post('http://localhost:8080/api/v1/addLego', data).then((response) => {
          console.log(response); // do something with the response
        });
        navigate(`/legoList`);
        window.location.reload(true);
      }
      
      const goBack = (e) => {
        navigate(`/legoList`);
      }

    return (    
        <>   
        <div className="flex max-w-2x1 mx-auto shadow border-b">
        <Sidebar></Sidebar>
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
                <label for='file' className="block text-gray-600 text-sm font-normal" >
                        Select file
                    </label>
                 <input type="file"
                 name="image"
                 id="image"
                 onChange={handleUploadFile}/>                                          
                 <div className="buttons py-4 space-x-4">
                     <img className="legoImage" src={new Blob([image])} width="150" height="150" alt="legoimage"></img> 
                     <img width="270" height="160" alt="" ng-src="data:image/jpeg;base64,{{lego.image}}"/>
                     <img data-ng-src="data:image/jpeg;base64,{{lego.image}}"/>                 
                  <button 
                    onClick={saveLegoFile} 
                    className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                       Save
                   </button>                           
                   <button 
                   onClick={reset}
                   className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                       Clear
                   </button>
                   <button 
                    onClick={goBack} 
                    className="rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6">
                       Back
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
