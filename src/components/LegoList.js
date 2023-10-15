import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LegoService from '../services/LegoService';
import Lego from './Lego';
import Sidebar from './Sidebar';
import Footer from './Footer';

const LegoList = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(true)
    const [legos, setLegos] = useState(null);

    const useEffect =((e) => {
        
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await LegoService.getLegos();
                setLegos({legos: response.data});
                setImage(URL.createObjectURL(e.target.files[0]));
                console.log(legos, response.data);
            } catch (error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteLego = (e, id) => {
        e.preventDefault();
        LegoService.deleteLego(id).then((res) => {
            if(legos) {
                setLegos((prevElement) => {
                    return prevElement.filter((lego) => lego.id !== id);
                });
            }
        });
    };

       
    // }
//     function Companies() {
//     const [companies, setCompanies] = useState(initialState: [])
     
//     useEffect( effect: () => {
//        companydata()
//        },   deps: [])
 
//     const companydata = async () => {
//        const {data}= await axios.get("http://localhost:8080/api/v1/legos");
 
//        setCompanies(data);
//     }
// }
    return (
        <>      
       <div className="container mx-auto my-8">
       <div className="h-12">
           
            <button className="background-image-container" width="100px" height="50px" alt="addlego" onClick={() => navigate("/addLego") }>           
                <div className="addLegoText">
                Add Lego
                </div>
            </button>
            
       </div>
       <div className="scrollbar">
           {useEffect}
       <div className="flex shadow border-b">
           <div className="tablelego mx-0 my-0">
               
               <div className="bg-white grid gap-0 py-0 grid-cols-3 grid-rows-3">A
                   <>
                   B
                   {legos?.map((lego) => {
                    return(
                        <>
                        C
                        <Lego 
                        lego={lego} 
                        deleteLego={deleteLego} 
                        key={lego.id}></Lego>
                        <div>{lego}</div>
                        </>
                   )})}
                   </>
               </div>
               
               
           </div>
       </div>
       </div>
   <Sidebar></Sidebar>       
       </div>
       <Footer></Footer>
       </>
    );
};

export default LegoList
