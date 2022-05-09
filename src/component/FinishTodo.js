import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard";


const FinishTodo = () => {

    const finishId = useSelector(state => state.finish)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const handleRemoveTodo = (id) => {
        dispatch({type:'REMOVE_FINISH_TODOS', payload: id })
    }

    return ( 
        <div>
            { posts.filter(el=>finishId.includes(el.id)).map((el) =>(
                         <TodoCard key={el.id} id={el.id} userId={el.userId} title={el.title} body={el.body} handleClick={handleRemoveTodo} />
                    ) )

            }
          
        </div>
    )
}

export default FinishTodo;