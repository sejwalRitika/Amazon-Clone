import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './Screen/Cart/Cart';
import Homescreen from './Screen/HomeScreen/homescreen';
import Products from './Screen/Products/Products';
function App() {
  return (
<>
<Navbar/>
<Routes>
<Route path='/' element={<Homescreen/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
<Footer/>
</>
  );
}

export default App;
