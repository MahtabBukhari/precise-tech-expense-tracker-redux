import { expenseTypes } from "../action-types/expenses"

const initialStateList=()=>{
    //get data from local storage
    const list = JSON.parse(localStorage.getItem("expense_list"))
    //make an empty list
    let expense=[];
    //if data is get from local storage means if data present then assign data to expense arry
    if(list){
        expense=list
    }
    return expense
}

const initialState={
    expenseList:initialStateList(),
    query:''
}

export const expenseReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case expenseTypes.ADD_EXPENSE:
            //set data mean store in local storage
           localStorage.setItem('expense_list', JSON.stringify([payload,...state.expenseList]))
            //we allways change state according to the reducer state
            // As in that case initialState have a list if we want to add new data in list then
            //we will change means add new data in list as below
            return{
                ...state,
                expenseList:[payload,...state.expenseList]
            }
        case expenseTypes.DELETE_EXPENSE:{

           
            const updateList = state.expenseList.filter(item=> item.createdAt!==payload.createdAt)
            localStorage.setItem('expense_list',JSON.stringify(updateList))
            return{
                ...state,
                expenseList:updateList
            }
        }
    case expenseTypes.SEARCH_EXPENSE:
        return{
            ...state,
            query:payload
        }
        default:
            return state

    }
}