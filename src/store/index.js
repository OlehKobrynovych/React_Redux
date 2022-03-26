import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    posts: [],
    userId: null,
    finish: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                posts: action.payload
            } 
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(el=>el.id!==action.payload)  
            } 
        case 'ADD_POST':
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            } 
        case 'SET_SELECT_USERID':
            return {
                ...state,
                userId: action.payload,
            } 
        case 'ADD_FINISH_TODOS':
            return {
                ...state,
                finish: [
                    ...state.finish,
                    action.payload
                ],
            } 
        case 'REMOVE_FINISH_TODOS':
            return {
                ...state,
                finish: state.finish.filter(el => el!==action.payload)
            } 
        default:
            return state
        }
    }
    
    
    export const store = createStore(reducer, applyMiddleware(thunk));


    export const setUserThunk = () => (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch({type:'SET_USER', payload: json}) )
    }