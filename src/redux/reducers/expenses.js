import { expenseTypes } from "../action-types/expenses"

const initialState={
    expenseList:[]
}

export const expenseReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case expenseTypes.ADD_EXPENSE:
            //we allways change state according to the reducer state
            // As in that case initialState have a list if we want to add new data in list then
            //we will change means add new data in list as below
            return{
                ...state,
                expenseList:[payload,...state.expenseList]
            }
        case expenseTypes.DELETE_EXPENSE:{
            const updateList = state.expenseList.filter(item=> item.id!==payload.id)

            return{
                ...state,
                expenseList:updateList
            }
        }
        default:
            return state

    }
}