import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart';
import Header from './components/Header';
import Home from './components/pages/Home/Home';
import EsewaPayment from './Esewa/EsewaPayment';
import Success from './Esewa/Success';
import Failure from './Esewa/Failure';
import Login from './components/pages/Login';
import Test from './Test';

const MyRoutes = () => {


  return (
    
      <Routes>
        
        
        <Route element={<Header />}> 
       
         <Route path='/' element={<Home/>}/>
         <Route path="/cart" element={<Cart />}/>
         <Route path="/esewa" element={<EsewaPayment />}/>
         <Route path="/success" element={<Success />}/>
         <Route path="/failure" element={<Failure />}/>
         <Route path="/test" element={<Test/>}/>

        </Route>
        <Route path='/login' element={<Login/>}/>        
      </Routes>
  
  );
};


export default MyRoutes;
