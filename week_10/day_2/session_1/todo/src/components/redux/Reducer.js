import { ADD_NEW_TODO, DELETE_TODO, TOGGLE, COUNT } from './Action'

const initialState = {
    todo:[],
    countOfNonCompletedTasks:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_NEW_TODO:
        return {
            ...state,
            todo: [...state.todo, payload]
        }
    case COUNT:
        return{
            ...state,
            countOfNonCompletedTasks: state.todo.filter(e => e.completed == false).length
        }
    case TOGGLE:
        return{
            ...state,
            todo: state.todo.map(e => {
                if(e.id == payload){
                    e.completed = !e.completed
                }
                return e
            })
        }
    case DELETE_TODO:
        return{
            ...state,
            todo: state.todo.filter(e => e.id != payload)
        }
    default:
        return state
    }
}


