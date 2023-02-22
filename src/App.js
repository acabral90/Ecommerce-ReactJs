import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './storage/cartContext';
import { exportArray } from './services/firebase';
import CartContainer from './components/CartContainer/CartContainer';
import FinishCart from './components/FinishCart/FinishCart';


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='category/:categoryid' element={<ItemListContainer/>}/>
      <Route path='item/:itemid' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartContainer/>} />
      <Route path="/thank-you/:orderid" element={<FinishCart/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>  
    );
}

export default App;
