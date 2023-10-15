import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import AddLego from './components/AddLego';
import Navbar from './components/Navbar';
import LegoList from './components/LegoList';
import UpdateLego from './components/UpdateLego';
import Cart from './components/Cart';

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
      <Route path="/editLego/:id" element={<UpdateLego />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter> 
  </>   
  );
}

export default App;
