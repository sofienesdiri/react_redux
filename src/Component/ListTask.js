

import { useState } from "react"
import { Button,Stack } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../Redux/Actions"
import Task from "./Task"
import { Input } from '@chakra-ui/react'
const ListTask=()=>{
   const tab = useSelector(state=> state.tab)
   const [textInput,setTextInput]=useState("")
   const [test,setTest]=useState(1)
   const dispatch = useDispatch() 
    return(
        <div>
            
            <div className="inp-add">
                {/* <input onChange={e=>setTextInput(e.target.value)}/> */}
                <Input placeholder='Add task'  htmlSize={4} width='auto' onChange={e=>setTextInput(e.target.value)}/>
                <br/>
                <Button variant="primary" size="sm" onClick={()=>dispatch(addTask({description:textInput,id:Math.random(),isDone:false}))}>Add</Button>
            </div>
            
            <br/>
            <Button variant="outline-success" onClick={()=>setTest(2)}>Done</Button>
            <Button variant="outline-dark" onClick={()=>setTest(1)}>All</Button>
            <Button variant="outline-danger" onClick={()=>setTest(3)}>Not Done</Button>
            
            
            {
                // tab.map(el => <Task key={el.id} el={el}/>)
                test == 2 ? tab.filter((el) => el.isDone == true).map((el) => <Task el={el} />)
                    : test == 3
                    ? tab.filter((el) => el.isDone == false).map((el) => <Task el={el} />)
                    : tab.map((el) => <Task el={el} />)
            }
        </div>
    )
}
export default ListTask