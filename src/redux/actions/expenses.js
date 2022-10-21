import { expenseTypes } from "../action-types/expenses"

export const addexpense=(data)=>{
    return{
        type:expenseTypes.ADD_EXPENSE,
        payload:data
    }
}