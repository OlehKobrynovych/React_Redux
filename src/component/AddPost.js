import Button from 'react-bootstrap/Button'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col } from 'react-bootstrap';


const AddPosts = () => {

    const dispach =  useDispatch()
    const [titleText, settitleText] = useState('')
    const [bodyText, setbodyText] = useState('')
    const [error, setError] = useState('')
    const inputTitleRef = useRef(null)
    const inputBodyRef = useRef(null)
    const userId = useSelector(state=>state.userId)


    const hendleSubmit = (e) => {
        e.preventDefault()
        if (titleText.length && bodyText.length) {
                dispach({type: 'ADD_POST', payload:{
                    id:  Math.floor(Date.now() / 1000),
                    userId: userId ,
                    title: titleText,
                    body: bodyText
                }
            })
            setError('')
            setbodyText('')
            settitleText('')
        } else {
            setError('!!!You need to fill everything!!!')
        }
    }

    const handelFill = () => {
        if (!titleText.length) {
            inputTitleRef.current.focus()
            return
        }
        if (!bodyText.length) {
            inputBodyRef.current.focus()
        }
    }

    return (
        <>
            <form className="w-50 mx-auto">
                <Col xs={12} className="my-1">
                    <label>Enter title:</label>
                    <input className="w-100" ref={inputTitleRef} placeholder='Title' type="search" onChange={(e)=>settitleText(e.target.value)} value={titleText} ></input>
                </Col>
  
                <Col xs={12} className="my-1">
                    <label>Enter body:</label>
                    <input className="w-100" ref={inputBodyRef} placeholder='Body' type="search" onChange={(e)=>setbodyText(e.target.value)} value={bodyText} ></input>
                </Col>

                <Col xs={12} className="my-3">
                    {
                        error.length > 0 && (
                            <div className='error_text'>
                                <span onClick={()=>handelFill()}>{error}</span>
                                <Button variant="danger" className="p-2 mx-2" onClick={()=>setError('')}>x</Button>
                            </div>)
                    }
                </Col>

                <Col xs={12} className="my-3">
                    <Button className='w-100' type='submit' variant="primary" onClick={(e) => hendleSubmit(e)}>Add post</Button>
                </Col>

            </form>
        </>
    )
}

export default AddPosts;