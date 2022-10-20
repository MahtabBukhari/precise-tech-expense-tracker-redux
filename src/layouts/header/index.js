import React from 'react'
import './styles.css'
import {BsCreditCard,BsGithub} from 'react-icons/bs'
import { Button } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="header">
            <div className="header-logo"><h3 className='mr-2'> Expensr. </h3><span><BsCreditCard size="2em"/> </span> </div>
            <a href="https://github.com/MahtabBukhari/precise-tech-expense-tracker-redux" target="_blank" rel="noreferrer noopener" ><Button size="sm" variant="outline-dark" style={{backgroundColor:"transparent",color:"black"}}> <BsGithub color='#000' size="2em"/> Star</Button></a>
        </div>
    </div>
  )
}

export default Header