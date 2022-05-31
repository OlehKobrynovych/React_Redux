import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";


const TodoCard = ({id, userId, title, body, handleClick, handleClickEdit }) => {
    const dispatch = useDispatch()
    const finishId = useSelector(state => state.finish)


    const remove = (id) => {
        dispatch({type: 'REMOVE_POST', payload: id})
    }
    
    return (
        <div className='cart_wrapper' >
            <div><h3>Id: {id}</h3></div>
            <div><h3>UserId: {userId}</h3></div>
            <div><h3><span className='title_text'>Title:</span> {title}</h3></div>
            <div><h3><span className='title_text'>Body:</span> {body}</h3></div>
            <Button className="m-3 " variant="danger" onClick={() => remove(id)}>Delete</Button>
            <Button className="m-3 " variant="primary" onClick={() => handleClick(id)}>Is done</Button>
            {
                !finishId.includes(id) &&  <Button className="m-3 " variant="primary" onClick={() => handleClickEdit(id)}>Edit note</Button>
            }
        </div>
    )
}

export default TodoCard;