import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import Cards from '../card'
import './styles.css'

const ExpenseList = () => {

    const {expenseList:list,query} = useSelector(state=>state.expenses)
    
    const filterList = list.filter(item=> item.title.includes(query))
    const deleteToast=()=>{
        toast.success("Expensr. Card deleted successfully")
    }
    
  return (
    <>
     <ToastContainer
position="bottom-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}


theme="light"/>
    {filterList.length?(
    filterList.map(item=> <Cards key={item.id} deleteToast={deleteToast} item={item}/>    
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