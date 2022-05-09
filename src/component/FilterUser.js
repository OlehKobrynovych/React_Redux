import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const FilterUser = () => {

    const posts = useSelector(state=>state.posts)
    const dispatch = useDispatch()
    const [userId,setUserId] = useState(null)

    const hendleChenge = (value) => {
        setUserId(value)
        dispatch({type: 'SET_SELECT_USERID', payload: Number(value)})
    }

    return (
        <div>
            <span className='px-3'>Select User</span>
            <select onChange={(e)=>hendleChenge(e.target.value)} >
                <option value={null}></option>
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3} >3</option>
                <option value={4} >4</option>
                <option value={5} >5</option>
                <option value={6} >6</option>
                <option value={7} >7</option>
                <option value={8} >8</option>
                <option value={9} >9</option>
                <option value={10} >10</option>
            </select>
        </div>
    )
}

export default FilterUser;