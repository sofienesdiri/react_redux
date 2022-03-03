import { tab } from "@testing-library/user-event/dist/tab";
import { ADDTASK, CAHNGETASK, DELETETASK, REVERSEDONE,  } from "./ActionsTypes";

const initialState={
    tab:[{description:"Take shower",id:Math.random(),isDone:false},
{description:"Eat breakfast",id:Math.random(),isDone:false}
]
}

const Reducers=(state = initialState,action)=>{
    switch (action.type) {
           case ADDTASK : return {...state,tab:[...state.tab,action.payload]}
           case DELETETASK : return {...state,tab:state.tab.filter(al=> al.id!==action.payload)}
           case CAHNGETASK : return {...state,tab:state.tab.map(al=>al.id==action.payload.id?{...al,description:action.payload.description}:al)}
           case REVERSEDONE : return {...state,tab:state.tab.map(al=>al.id==action.payload?{...al,isDone:!al.isDone}:al)}
        default:
            return state
    }
}
export default Reducers

