import moment from 'moment/moment'
import React from 'react'
import './styles.css'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteexpense } from '../../redux/actions/expenses'


const Cards = ({item,deleteToast}) => {
  const dispatch= useDispatch()
  const handleDelete=()=>{

    dispatch(deleteexpense(item))
    deleteToast();
   

  }
// npm monent is used here
  const time = moment(item.createdAt).fromNow()
  return (
    <Card style={{borderRight:`5px solid ${item.category.color}`,width:"90%",padding:"1vmax",margin:"1vmax"}}>
           
      <Row >
        <Col className='col-lg-2 col-md-2 col-sm-2'>
          <img src={item.category.icon} alt="categoryImage" width="70vmax" />
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm-6 ml-2'>
          <h4>{item.title}</h4>
          <div className="timeLav">{time}</div>

        </Col>
        <Col className='col-lg-2 col-md-2 col-sm-3 ml-auto priceCol'>

          <Button style={{backgroundColor:"transparent",border:"none",outline:"none"}} onClick={handleDelete}><RiDeleteBin6Line color='black' size="1.5rem"/></Button>
           <p><strong>₨ {item.amount}</strong></p>


        </Col>
      </Row>
      
  
</Card>
  )
}

export default Cards