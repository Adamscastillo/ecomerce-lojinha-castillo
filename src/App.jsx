import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, Footer, Navbar, } from './components/Main';
import { footerAPI } from './data/data.js';
 
// pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Pagamento from './pages/Pagamento';


const App = () => {
  
  return (
   <Router>
      <Navbar/>
      <Cart />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Signup />} exact path="/signup" />
        <Route element={<Pagamento />} exact path="/pagamento" />
        
      </Routes>
      
      <Footer footerAPI={footerAPI} />
   </Router>
  )
}

export default App;