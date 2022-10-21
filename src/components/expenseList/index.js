import React from 'react'
import Cards from '../card'
import './styles.css'

const ExpenseList = () => {
    const list=[
        {
            title:'hello'

        },
        {
            title:'hello'

        }
    ]
  return (
    <>
    {list.length?(
    list.map(item=> <Cards item={item}/>    
        )
   
    ):null}
    </>
  )
}

export default ExpenseList