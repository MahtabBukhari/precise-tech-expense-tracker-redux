import React from 'react'
import { Button, Card } from 'react-bootstrap';
import {AiOutlineHome} from 'react-icons/ai'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#71ccca',
    width:'30%',
    height:'90%',
    borderRadius:'12px',
    ariaHideApp:false
  },
};

const SuccessModal = ({modalOpen,title}) => {

  return (
    <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
      <Card style={{margin:"0px",backgroundColor:"#71ccca",textAlign:"center",border:"none"}}>
        <Card.Title>{title}</Card.Title>
        <Card.Img  src={require('../../assets/images/added-image.png')} style={{height:"25vmax",margin:"auto"}} alt="immodal"/>
        <Card.Body >
        
        <Link to="/"><Button variant='outline-dark' style={{backgroundColor:"transparent",color:"black",margin:"auto"}}><AiOutlineHome size="1.5rem"/> Home</Button></Link>  
        </Card.Body>
      </Card>
    </Modal>
  )
}

export default SuccessModal
