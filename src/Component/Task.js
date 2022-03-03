import { useDispatch } from "react-redux"
import { deleteTask, reverseDone } from "../Redux/Actions"
import EditTask from "./EditTask"
import { DeleteIcon,CheckCircleIcon,EditIcon } from '@chakra-ui/icons'


const Task=({el})=>{
   
    const dispatch= useDispatch()
    return(
        <div >
            <h2 className={el.isDone && "djeja"}>{el.description}</h2>
            <DeleteIcon boxSize={30} onClick={()=>dispatch(deleteTask(el.id))}/>
            <CheckCircleIcon boxSize={30} onClick={()=>dispatch(reverseDone(el.id))}/>
            <br/>
            <EditTask el={el}/>
            <br/>
            
            
        </div>
    )
}
export default Task