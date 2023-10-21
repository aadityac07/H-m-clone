// import react from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Mens from './components/Mens';
import ShoppingCart from './components/ShoppingCart'
import SingleProduct from './components/SingleProduct';
import SingleProductBody from './components/SingleProductBody';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path='/Mens' element={<Mens />} />
        <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
        <Route exact path='/SingleProduct' element={<SingleProduct/>} />
        <Route exact path='/SingleProductBody' element={<SingleProductBody/>} />
        {/* <Route exact path='/'/> */}
      </Routes>
    </div>
  );
}

export default App;
