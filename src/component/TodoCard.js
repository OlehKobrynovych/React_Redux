import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";

const TodoCard = ({id, userId, title, body, handleClick}) => {
    const dispatch = useDispatch()

    const remove = (id) => {
        dispatch({type: 'REMOVE_POST', payload: id})
    }
    
    return (
        <div className='cart_wrapper' >
            <div>Id: {id}</div>
            {/* {userId && <div>UserId: {userId}</div>} */}
            <div>UserId: {userId}</div>
            <div><span className='title_text'>Title:</span> {title}</div>
            <div><span className='title_text'>Body:</span> {body}</div>
            <Button className="m-3 " variant="danger" onClick={() => remove(id)}>Delete</Button>
            <Button className="m-3 " variant="primary" onClick={() => handleClick(id)}>Is done</Button>
        </div>
    )
}

export default TodoCard;