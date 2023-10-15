import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import LegoService from '../services/LegoService';
import axios from "axios";

const UpdateLego = () => {

    const [image, setImage] = useState();

    const ref = useRef();

const {id} = useParams();
const navigate = useNavigate();
const [lego, setLego] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
    image: "",
})

const handleChange = (e) => {
    const value = e.target.value;
    setLego({...lego, [e.target.name]: value});
    console.log("File" + image);
    console.log("Lego file" + lego.image);
};

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await LegoService.getLegoById(id);
            setLego(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);

const updateLego = (e) => {
    e.preventDefault();
    const data = new FormData();
        data.append('image', image);
        data.append('firstName', lego.firstName);
        data.append('lastName', lego.lastName);
        data.append('emailId', lego.emailId);
        // '/files' is your node.js route that triggers our middleware
        axios.put('http://localhost:8080/api/v1/legos/' + id, data).then((response) => {
          console.log(response); // do something with the response
        });
        navigate(`/legoList`);
        console.log("file" + image);
        console.log("Lego file" + lego.image);
};

const handleUploadFile = (event) => {
    setImage(event.target.files[0]);
    console.log("File" + image);
  }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Update Lego</h1>
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
                <input type="email"
                       name="emailId"
                       value={lego.emailId}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <input type="file" value={lego.image} onChange={(event) => {
  handleUploadFile(event);
  }} ref={ref}/>
                
               <button 
                onClick={updateLego} 
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                   Update
               </button>
               <button
               onClick={() => navigate("/legoList")}
               className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                   Cancel
               </button>
            </div>
        </div>
    </div>
    )
}

export default UpdateLego
