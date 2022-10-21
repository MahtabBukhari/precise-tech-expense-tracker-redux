import React from 'react';
import { Route, Routes } from 'react-router-dom';


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
      
    
    </div>
  )
}

export default App
