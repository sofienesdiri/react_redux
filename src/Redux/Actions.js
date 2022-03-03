import { ADDTASK, CAHNGETASK, DELETETASK, EDITTASK, REVERSEDONE } from "./ActionsTypes"


export const addTask=(payload)=>{
    return(
        {
            type: ADDTASK,
            payload
        }
    )
}
export const deleteTask=(payload)=>{
    return(
        {
            type: DELETETASK,
            payload
        }
    )
}
export const changeTask=(payload)=>{
    return(
        {
            type: CAHNGETASK,
            payload
        }
    )
}
export const reverseDone = (payload)=>{
    return(
        {
            type : REVERSEDONE,
            payload
        }
    )
}