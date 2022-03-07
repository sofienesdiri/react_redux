import { useDispatch } from "react-redux"
import { deleteTask, reverseDone } from "../Redux/Actions"
import EditTask from "./EditTask"
import { DeleteIcon,CheckIcon } from '@chakra-ui/icons'
import { Col, Row } from "react-bootstrap"
import { Text } from '@chakra-ui/react'



const Task=({el})=>{
   
    const dispatch= useDispatch()
    return(
        <div className="task">
            <Text fontSize='4xl' className={el.isDone && "djeja"}>{el.description}</Text>
            <Row>
                <Col  xs={3}> <CheckIcon boxSize={7} onClick={()=>dispatch(reverseDone(el.id))}/></Col>
                <Col  xs={3}><DeleteIcon boxSize={7} onClick={()=>dispatch(deleteTask(el.id))}/></Col>
                <Col><EditTask el={el}/></Col>
            </Row>
            
            
            
            
            
            <br/>
            
            
        </div>
    )
}
export default Task