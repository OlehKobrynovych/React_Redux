import { useRef, useState } from "react"
import { useDispatch } from "react-redux"


const AddPosts = () => {

    const dispach =  useDispatch()
    const [titleText, settitleText] = useState('')
    const [bodyText, setbodyText] = useState('')
    const [error, setError] = useState('')
     const inputTitleRef = useRef(null)
     const inputBodyRef = useRef(null)

    const hendleSubmit = (e) => {
        e.preventDefault()
        if (titleText.length && bodyText.length) {
                dispach({type: 'ADD_POST', payload:{
                    id:  Math.floor(Date.now() / 1000),
                    userId: 1,
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
            <form  >
                <label>Enter title:
                    <input ref={inputTitleRef} placeholder='Title' type="text" onChange={(e)=>settitleText(e.target.value)} value={titleText} ></input>
                </label>
                <label>Enter body:
                    <input ref={inputBodyRef} placeholder='Body' type="text" onChange={(e)=>setbodyText(e.target.value)} value={bodyText} ></input>
                </label>
                <button type='submit' onClick={(e)=>hendleSubmit(e) } >Add post</button>
            </form>
            {
                error.length > 0 && (
                    <div className='error_text'>
                        <span onClick={()=>handelFill()}>{error}</span>
                        <button onClick={()=>setError('')}>Х</button>
                    </div>)
            }
        </>
    )
}

export default AddPosts;