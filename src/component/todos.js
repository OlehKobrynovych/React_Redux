import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserThunk } from "../store";
import AddPosts from "./AddPost";
import FilterUser from "./FilterUser";
import FinishTodo from "./FinishTodo";
// import { store } from "../store/index";


const Todos = () => {
    const userId = useSelector(state=>state.userId)
    const posts = useSelector((stete) => stete.posts)
    const finishId = useSelector(state => state.finish)

    const dispatch = useDispatch()

    const wrapper = {
        width: '45%'
    }

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => dispatch({type:'SET_USER', payload: json}) )
        dispatch(setUserThunk())
    }, []) 

    const remove = (id) => {
        dispatch({type: 'REMOVE_POST', payload: id})
    }
    
    const handleFinishTodo = (checked, id) => {
        if (checked) {
            dispatch({type:'ADD_FINISH_TODOS', payload: id })
        } else {
            dispatch({type:'REMOVE_FINISH_TODOS', payload: id })
        }
    }

    return (
        <div>
            <FilterUser/>
            <AddPosts/>
            <div style={{display: 'flex'}}>
                <div style={wrapper}>
                    {
                        posts.filter(el=>!finishId.includes(el.id)).filter(el=>userId ? el.userId===userId : el).map((el) =>(
                            <div key={el.id} className='cart_wrapper' >
                                <div>Id: {el.id}</div>
                                <div>UserId: {el.userId}</div>
                                <div><span className='title_text'>Title:</span> {el.title}</div>
                                <div><span className='title_text'>Body:</span> {el.body}</div>
                                <button onClick={() => remove(el.id)} >Delete</button>
                                <input value='Is done' type='button' onClick={(e) => handleFinishTodo(e, el.id)} />
                            </div>
                        ) )
                    }
                </div>
                <div style={wrapper}>
                    <FinishTodo/>
                </div>
            </div>
        </div>
    )
}

export default Todos;