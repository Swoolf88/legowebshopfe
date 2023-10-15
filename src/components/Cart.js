import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import LegoService from '../services/LegoService';
import CartService from '../services/CartService';
import axios from "axios";

const Cart = () => {

    const [file, setFile] = useState();

    const ref = useRef();

const {id} = useParams();
const navigate = useNavigate();
const [cart, setCart] = useState({
    id: id,
    image: "",
    description: "",
    condition: "",
    each: "",
    quantity: "",
    subtotal: "",
})

const handleChange = (e) => {
    const value = e.target.value;
    setCart({...cart, [e.target.name]: value});
    console.log("File" + file);
    console.log("Lego file" + cart.file);
};

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await CartService.getCartById(id);
            setCart(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);

const updateCart = (e) => {
    e.preventDefault();
    const data = new FormData();
        data.append('image', cart.image);
        data.append('description', cart.description);
        data.append('condition', cart.condition);
        data.append('each', cart.each);
        data.append('quantity', cart.quantity);
        data.append('subtotal', cart.subtotal);
        // '/files' is your node.js route that triggers our middleware
        axios.put('http://localhost:8080/api/v1/cart/' + id, data).then((response) => {
          console.log(response); // do something with the response
        });
        navigate(`/LegoList`);
    console.log("File" + file);
    console.log("Lego file" + cart.file);
};

const handleUploadFile = (event) => {
    setFile(event.target.files[0]);
    console.log("File" + file);
  }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Cart</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Image
                </label>
                <div className="text-left px-0">
                         <div className="text-left my-0 px-0"><img width="270" height="160" alt="" src={`data:image/jpeg;base64,${cart.image}`}/></div>
                     </div>
                <input type="text"
                        name="image"
                        value={cart.image}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Description
                </label>
                <input type="text"
                       name="description"
                       value={cart.description}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Condition
                </label>
                <input type="text"
                       name="condition"
                       value={cart.condition}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Each
                </label>
                <input type="text"
                       name="description"
                       value={cart.each}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Quantity
                </label>
                <input type="text"
                       name="quantity"
                       value={cart.quantity}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >
                    Subtotal
                </label>
                <input type="text"
                       name="subtotal"
                       value={cart.subtotal}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <input type="file" value={cart.file} onChange={(event) => {
                handleUploadFile(event);
                }} ref={ref}/>
                
               <button 
                onClick={updateCart} 
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                   Update
               </button>
               <button
               onClick={() => navigate("/LegoList")}
               className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                   Cancel
               </button>
            </div>
        </div>
    </div>
    )
}

export default Cart
