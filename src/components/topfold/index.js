import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {CgAdd} from 'react-icons/cg'
import {MdArrowBackIos,MdOutlineCancel} from 'react-icons/md'
import { Link } from 'react-router-dom' 
import {Row,Col} from 'react-bootstrap'
import './styles.css'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchexpense } from '../../redux/actions/expenses'

const TopFold = () => {
  const dispatch = useDispatch()
    const [query,setQuery]=useState('')
    const handlequery=(e)=>{
        setQuery(e.target.value)
        dispatch(searchexpense(e.target.value))
    }
    console.log(query)
  return (
    <div className='top-fold'>
       
       {window.location.pathname === '/' ? ( <Row className='searchbar'>
        <Col className='col-lg-7 col-md-7 col-7 bg-light p-1 rounded '>  <BiSearch color="black" size="1.5rem"/>
            <input className='searchfield' type="text" value={query} onChange={handlequery} /></Col>
        <Col className='col-lg-2 col-md-2 col-2'> <Link to='/add-expense'> <Button style={{backgroundColor:"transparent",color:"white"}} variant="outline-light"><CgAdd size="1.5rem"/> add</Button></Link></Col>
    </Row>) : ( <Row>
        <Col className='againstSearchbar col-lg-12 col-md-12 col-12'>
         <Link to='/'>   <Button style={{backgroundColor:"transparent",color:"black",border:"none"}} variant="outline-dark" className='ml-2'><MdArrowBackIos/> back</Button></Link>
            <Button style={{backgroundColor:"transparent",color:"black",border:"none"}} variant="outline-dark" className='mr-1'><MdOutlineCancel size="1.5rem" className="mr-1"/>cancel</Button>
        </Col>
       </Row>)
       }

       
      
   
           
        
    </div>
  )
}

export default TopFold