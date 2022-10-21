import React from 'react'
import ExpenseList from '../../components/expenseList'
import TopFold from '../../components/topfold'
import './styles.css'

const Home = () => {
  return (
    <div className='home'>
        <TopFold/>
        <ExpenseList/>
    </div>
  )
}

export default Home