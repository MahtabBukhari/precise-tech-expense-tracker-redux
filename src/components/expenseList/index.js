import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../card'
import './styles.css'

const ExpenseList = () => {

    const list = useSelector(state=>state.expenses.expenseList)
    console.log(list)
    
  return (
    <>
    {list.length?(
    list.map(item=> <Cards key={item.id} item={item}/>    
        )
   
    ):<div className='emptyList'>
        <img src={require('../../assets/images/empty.png')} alt="empty" width="50%"/>
       <div>
       <label>uh oh! your expense list is empty</label>
        </div> 
        </div>}
    </>
  )
}

export default ExpenseList