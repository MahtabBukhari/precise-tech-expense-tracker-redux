import React from 'react';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Home from './pages/Home';
import './styles/App.css';


const App = () => {
  return (
    <div>
       <Header/>
        <Home/>
       <Footer/>
    </div>
  )
}

export default App
