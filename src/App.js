import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import AddLego from './components/AddLego';
import Navbar from './components/Navbar';
import LegoList from './components/LegoList';
import EditLego from './components/EditLego';
import Cart from './components/Cart';
import OurPartners from './components/OurPartners';

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<LegoList />} />
      <Route path="/" element={<LegoList />}></Route>
      <Route path="/legoList" element={<LegoList />} />
      <Route path="/addLego" element={<AddLego />} />
      <Route path="/editLego/:id" element={<EditLego />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ourPartners" element={<OurPartners />} />
    </Routes>
  </BrowserRouter> 
  </>   
  );
}

export default App;
