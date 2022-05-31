import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserThunk } from "../store";
import AddPosts from "./AddPost";
import FilterUser from "./FilterUser";
import FinishTodo from "./FinishTodo";
import TodoCard from './TodoCard';
import { Col, Row } from 'react-bootstrap';
import { useState } from "react"
import EditNote from "./EditNote";



const Todos = () => {
    const userId = useSelector(state=>state.userId)
    const posts = useSelector((stete) => stete.posts)
    const finishId = useSelector(state => state.finish)
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const [editUserId, setEditUserId] = useState(null)
    // debugger

    const dispatch = useDispatch()

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => dispatch({type:'SET_USER', payload: json}) )
        dispatch(setUserThunk())
    }, []) 

    const remove = (id) => {
        dispatch({type: 'REMOVE_POST', payload: id})
    }
    
    const handleFinishTodo = (id) => {
            dispatch({type:'ADD_FINISH_TODOS', payload: id })
    }
    
    const handleClickEdit = (id, userId) => {
        setEdit(true)
        setEditId(id)
        setEditUserId(userId)
    }

    return (
        <Row className='gradient'>

            <Col xs={12} className="my-3">
                <div className="todos__title">Notebook</div>
            </Col>

            <Col xs={12} className="my-3">
                    { edit === true ? <EditNote setEdit={setEdit} editId={editId}/> : null }
            </Col>

            <Col xs={12} className="my-3">
                <FilterUser/>
            </Col>

            <Col xs={12} className="my-3">
                <AddPosts/>
            </Col>
            
            <Col sm={12} md={6}>
                <div className='todos__post-title__not-fulfilled'>Not-fulfilled</div>
                {
                    posts.filter(el=>!finishId.includes(el.id)).filter(el=>userId ? el.userId===userId : el).map((el) =>(
                        <TodoCard key={el.id} id={el.id} userId={el.userId} 
                            title={el.title} body={el.body} handleClick={handleFinishTodo}
                            handleClickEdit={() => handleClickEdit(el.id, el.userId)}
                        />
                    ) )
                }
            </Col>
            <Col sm={12} md={6}>
            <div className='todos__post-title__fulfilled'>Fulfilled</div>
                <FinishTodo/>
            </Col>
        </Row>
    )
}

export default Todos;