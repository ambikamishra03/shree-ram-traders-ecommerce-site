import React from 'react';
import { 
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
