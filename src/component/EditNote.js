import Button from 'react-bootstrap/Button'
import { useRef, useState } from "react"
import { Col, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';


const EditNote = ({setEdit, editId}) => {
    const dispach =  useDispatch ()
    const [titleText, settitleText] = useState('')
    const [bodyText, setbodyText] = useState('')
    const [error, setError] = useState('')

   
    const hendleEditSubmit = (e) => {
        e.preventDefault()
        if (titleText.length && bodyText.length) {
                dispach({type: 'ADD_EDIT_POST', payload:{
                    id: editId,
                    title: titleText,
                    body: bodyText
                }
            })
            setbodyText('')
            settitleText('')
            setEdit(false)

        } else {
            setError('!!!You need to fill everything!!!')
        }
    }

    const hendleClose = () => {
        setEdit(false)
    }

   
    return (
        <div className='editNote-wrap p-3'>
             <Form className="w-100 mx-auto">
                <Form.Group xs={12} className="my-1" controlId="formBasicTitle">
                    <Form.Label>Enter title:</Form.Label>
                    <Form.Control className="w-100" placeholder='Title' 
                        type="search" onChange={(e)=>settitleText(e.target.value)} 
                        value={titleText} ></Form.Control>
                </Form.Group>
  
                <Form.Group xs={12} className="my-1" controlId="formBasicBody">
                    <Form.Label>Enter body:</Form.Label>
                    <Form.Control className="w-100" placeholder='Body' 
                        type="search" onChange={(e)=>setbodyText(e.target.value)} 
                        value={bodyText} ></Form.Control>
                </Form.Group>

                <Col xs={12} className="my-3">
                    {
                        error.length > 0 && (
                            <div className='error_text'>
                                <span>{error}</span>
                                <Button variant="danger" className="p-2 mx-2" onClick={()=>setError('')}>x</Button>
                            </div>)
                    }
                </Col>

                <Col xs={12} className="my-3">
                    <Button className='w-25 m-2' variant="danger" onClick={() => hendleClose()}>Close</Button>
                    <Button className='w-25 m-2' type='submit' variant="primary"
                        onClick={(e) => hendleEditSubmit(e)}>Add post</Button>
                </Col>

            </Form>
        </div>
    )
}

export default EditNote;