import { expenseTypes } from "../action-types/expenses"

export const addexpense=(data)=>{
    return{
        type:expenseTypes.ADD_EXPENSE,
        payload:data
    }
}


export const deleteexpense=(data)=>(
    {
        type:expenseTypes.DELETE_EXPENSE,
        payload:data
    }
)


export const searchexpense=(query)=>(
    {
        type:expenseTypes.SEARCH_EXPENSE,
        payload:query
    }
)