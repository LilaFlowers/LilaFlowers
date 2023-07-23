import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bouquets from './components/pages/Bouquets';
import Custom from './components/pages/Custom';
import About from './components/pages/About';
import Reviews from './components/pages/Reviews';
import MyCart from './components/pages/MyCart';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
<Router>
<Navbar />
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/bouquets" element={<Bouquets />} />
<Route path="/custom" element={<Custom />} />
<Route path="/about" element={<About />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/mycart" element={<MyCart />} />
</Routes>
<Footer/>
</Router>      
  );
}

export default App;
