
import React, { useState } from 'react';
import {InputGroup,Form,Dropdown,Card, Button} from 'react-bootstrap';
import './styles.css';
import {SlPaperPlane} from 'react-icons/sl'
import {categories as Cat} from '../categoryList' 

const AddForm = () => {
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [category,setCategory]=useState()
    console.log(category)


const handleSubmit=()=>{

  // check validation
  if(title===''||amount===''||!category){
    console.log('No data')
    return
  }

  const data={
    title,
    amount,
    category,
    createdAt:new Date()
  }

  console.log(data)

}


  return (
    <div className='add-form'>
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
        <InputGroup.Text id="basic-addon2">Amount</InputGroup.Text>
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
        category?category:"Category"
       }
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{backgroundColor:"white",color:"black",width:"50%"}} >
       {
            Cat.map(cat=><Dropdown.Item key={cat.id} style={{borderRight:`5px solid ${cat.color}`}}  onClick={()=>{setCategory(cat.title)}}>

              <label > {cat.title}</label>
              <img src={cat.icon} alt={cat.title} />
              
              
              </Dropdown.Item>)
       }
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="submitData">
          <Button variant='outline-light' style={{backgroundColor:"transparent",color:"black"}} onClick={handleSubmit}>add <SlPaperPlane/></Button>
        </div>
    </div>
  )
}

export default AddForm