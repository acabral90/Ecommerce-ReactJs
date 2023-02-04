import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './storage/cartContext';
import { exportArray } from './services/firebase';


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
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>  );
}

export default App;
