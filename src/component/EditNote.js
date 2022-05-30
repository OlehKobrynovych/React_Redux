import { Button } from "bootstrap";
import { useRef, useState } from "react"
import { Col, Form } from "react-bootstrap";


const EditNote = () => {
    // const dispach =  useDispatch()
    const [titleText, settitleText] = useState('')
    const [bodyText, setbodyText] = useState('')
    const inputTitleRef = useRef(null)
    const inputBodyRef = useRef(null)

    // const settitleText = () => {
        
    // }

    return (
        <div className='editNote-wrap p-3'>
             <Form className="w-100 mx-auto">
                <Form.Group xs={12} className="my-1" controlId="formBasicTitle">
                    <Form.Label>Enter title:</Form.Label>
                    <Form.Control className="w-100" ref={inputTitleRef} placeholder='Title' 
                        type="search" onChange={(e)=>settitleText(e.target.value)} 
                        value={titleText} ></Form.Control>
                </Form.Group>
  
                <Form.Group xs={12} className="my-1" controlId="formBasicBody">
                    <Form.Label>Enter body:</Form.Label>
                    <Form.Control className="w-100" ref={inputBodyRef} placeholder='Body' 
                        type="search" onChange={(e)=>setbodyText(e.target.value)} 
                        value={bodyText} ></Form.Control>
                </Form.Group>

                <Col xs={12} className="my-3">
                    {/* <Button className='w-100' type='submit' variant="primary" onClick={(e) => hendleSubmit(e)}>Add post</Button> */}
                </Col>

            </Form>
        </div>
    )
}

export default EditNote;