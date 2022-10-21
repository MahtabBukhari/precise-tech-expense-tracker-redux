import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './layouts/footer';
import Header from './layouts/header';
import Addexpense from './pages/Addexpense';
import Home from './pages/Home';
import './styles/App.css';


const App = () => {
  return (
    <div>
       <Header/>
     
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/add-expense' element={<Addexpense/>}/>
       </Routes>
      
       <Footer/>
    </div>
  )
}

export default App
