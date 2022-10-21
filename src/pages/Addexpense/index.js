import React from 'react'
import AddForm from '../../components/add-form';

import TopFold from '../../components/topfold';
import './styles.css'

const Addexpense = () => {
  return (
    <div className='addexpense'>
    <TopFold/>
    
   <AddForm/>
    </div>
  )
}

export default Addexpense