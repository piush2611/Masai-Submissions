import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_ITEM, REMOVE_TODO } from './Action'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_ITEM:
            const id = action.payload
            state = state.map(e => e.id === id ? { ...e, completed: !e.completed } : e)
            return state
        case REMOVE_TODO:
            state = state.filter(e => e.id !== action.payload)
            return state
        default:
            return state
    }
}

const reducer = combineReducers({
    todo: todoReducer
})

export default reducer