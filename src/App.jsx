import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, Footer, Navbar, } from './components/Main';
import { footerAPI } from './data/data.js';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';


const App = () => {
  return (
   <Router>
      <Navbar/>
      <Cart />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Signup />} exact path="/signup" />
        
      </Routes>
      
      <Footer footerAPI={footerAPI} />
   </Router>
  )
}

export default App;