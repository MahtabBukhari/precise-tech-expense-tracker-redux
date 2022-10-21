
import React, { useState } from 'react';
import {InputGroup,Form,Dropdown, Button} from 'react-bootstrap';
import './styles.css';
import {SlPaperPlane} from 'react-icons/sl'
import {categories as Cat} from '../categoryList' 
import { useDispatch } from 'react-redux';

import { addexpense } from '../../redux/actions/expenses';
import { toast, ToastContainer } from 'react-toastify';
import SuccessModal from '../success_modal/SuccessModal';

const AddForm = () => {
  const dispatch = useDispatch()

    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [category,setCategory]=useState()
    const [modalOpen,setModalOpen]=useState(false)
  console.log(category)


const handleSubmit=()=>{

  // check validation
  if(title===''||amount===''||!category){
    toast("Please enter valid data!")
    return
  }

  const data={
    title,
    amount,
    category,
    createdAt:new Date()
  }

  dispatch(addexpense(data))
  setModalOpen(true)
  console.log(data)

}


  return (
    <div className='add-form'>
      <ToastContainer
position="bottom-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}


theme="light"
/>


<SuccessModal modalOpen={modalOpen}/>
        <div className="form-item">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter your expenditures"
          aria-label="expenditure"
          aria-describedby="basic-addon1"
          type='text'
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          
          required
        />
      </InputGroup>
        </div>
        <div className="form-item">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Amount ₨</InputGroup.Text>
        <Form.Control
          placeholder="Enter your Amount"
          aria-label="amount"
          aria-describedby="basic-addon2"
          type='number'
          onChange={(e)=>{
            const val = parseFloat(e.target.value)
            if(isNaN(val)){
                setAmount('')
                return
            }

            setAmount(val)

          }}
         
          required
        />
      </InputGroup>
        </div>

        <div className="selectcategory">
        <Dropdown>
      <Dropdown.Toggle variant="outline-light" style={{backgroundColor:"white",color:"black",width:"50%"}} id="dropdown-basic">
       {
        category?category.title:"Category"
       }
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{backgroundColor:"white",color:"black",width:"50%"}} >
       {
            Cat.map(category=><Dropdown.Item key={category.id} className='dropdownItem' style={{borderRight:`5px solid ${category.color}`}}  onClick={()=>setCategory(category)}>

              <label > {category.title}</label>
              <img src={category.icon} alt={category.title} width="30vmax" />
              
              
              </Dropdown.Item>)
       }
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="submitData mt-auto ml-auto">
          <Button variant='outline-light'  style={{backgroundColor:"transparent",color:"black"}} onClick={handleSubmit}>add <SlPaperPlane/></Button>
        </div>
    </div>
  )
}

export default AddForm