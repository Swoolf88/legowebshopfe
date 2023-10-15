import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";


const Lego = ({lego, deleteLego}) => {

    const navigate = useNavigate();
    const editLego = (e, id) => {
        e.preventDefault();
        navigate(`/editLego/${id}`);
    };
    const Cart = (id) => {
        navigate(`/cart/${id}`);
    };

      const showLego = (e) => {
      axios.get(`http://localhost:8080/api/v1/legos`)
      .then(res => {
        // const img = res.data;
        // this.setState({base64File: "data:image/png;base64," + img});
        this.setState({imageUrl: "http://localhost:8080/api/v1/legos"});
      //this.setState({imageUrl: "http://localhost:8080/api/v1/legos"});
        console.log(this.state.base64File);
      })
    }; 
    return (
        <div className="screen">
        <div className="text-left px-0 py-0" key={lego.id}>
                    <div className="text-left px-0">
                    <button 
                onClick={showLego}>
                         <div className="text-left my-0 px-0">{/*<img src={this.state.imageUrl} />*/}
                         {/* <img src={{uri: `data:image/jpeg;base64,${this.state.base64File}`}} /> */}
                         {/* <img src={this.state.imageUrl} /> */}
                         <img data-ng-src="data:image/jpeg;base64,{{this.state.base64FileOnlyData}}"/><img width="270" height="160" alt="" ng-src="data:image/jpeg;base64,{{lego.image}}"/>
                         {/* <img width="270" height="160" alt="" ng-src="data:image/jpeg;base64,{{lego.image}}"/> */}
                         </div>
                         </button>
                     </div>
                     <div className="text-left px-6 py-0 whitespace-nowrap">
                         <div className="text-sm bottom-4 text-orange-500">{lego.firstName}</div>
                     </div>
                     <div className="text-left px-6 py-0 whitespace-nowrap">
                         <div className="text-sm text-green-500">{lego.lastName}</div>
                     </div>
                     <div className="text-left px-2 py-0 whitespace-nowrap font-medium text-sm">
                         <a
                          onClick={(e, id) => editLego(e, lego.id)}
                          className="text-indigo-600 hover:text-indigo-800 px-4 py-0 hover:cursor-pointer">
                              Edit</a>
                         <a
                          onClick={(e, id) => deleteLego(e, lego.id)}
                          className="text-red-600 hover:text-red-800 py-0 hover:cursor-pointer">
                              Delete</a>
                     </div>
    
    <div className="oval">
        <a onClick={() => navigate("/cart") } 
        className="h2" text="Some text" color="white" verticalalignment="center"
        horizontalalignment="center">Add to cart <i className="fa fa-shopping-basket"></i></a>
    </div>
    </div>
    </div>
    )
}

export default Lego
