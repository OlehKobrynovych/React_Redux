import { useDispatch, useSelector } from "react-redux";


const FinishTodo = () => {

    const finishId = useSelector(state => state.finish)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const handleRemoveTodo = (id) => {
        dispatch({type:'REMOVE_FINISH_TODOS', payload: id })
    }

    const remove = (id) => {
        dispatch({type: 'REMOVE_POST', payload: id})
    }

    return ( 
        <div>
            { posts.filter(el=>finishId.includes(el.id)).map((el) =>(
                        <div key={el.id} className='cart_wrapper' >
                            <div>Id: {el.id}</div>
                            <div>UserId: {el.userId}</div>
                            <div><span className='title_text'>Title:</span> {el.title}</div>
                            <div><span className='title_text'>Body:</span> {el.body}</div>
                            <button onClick={() => remove(el.id)} >Delete</button>
                            <input type='button' onClick={() => handleRemoveTodo(el.id)} value='Not done' />

                        </div>
                    ) )

            }
          
        </div>
    )
}

export default FinishTodo;