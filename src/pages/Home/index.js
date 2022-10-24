import React from 'react'
// import ExpenseList from '../../components/expenseList'
import ReactPagination from '../../components/ReactPagination'
import TopFold from '../../components/topfold'
import './styles.css'

const Home = () => {
  return (
    <div className='home'>
        <TopFold/>
        {/* <ExpenseList/> */}
        <ReactPagination  itemsPerPage={4}/>
    </div>
  )
}

export default Home