import { useDispatch} from "react-redux"
import { Modal,Button, } from "react-bootstrap";
import { useState } from "react";
import { changeTask } from "../Redux/Actions";
const EditTask=({el})=>{

    const [inputCahnge,setInputChange] =useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch= useDispatch()

    return(
        <>
                <Button variant="primary" onClick={handleShow}>
                 Edit
                 </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input onChange={e=>setInputChange(e.target.value)}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>dispatch(changeTask({description:inputCahnge,id:el.id}))}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
    )
}
export default EditTask