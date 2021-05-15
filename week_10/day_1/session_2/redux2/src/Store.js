import { createStore } from 'redux'
import reducer from './Reducer'

var initialState = {
    todo: [
        {
            text: "Code",
            id: Math.random(),
            completed: false
        },
        {
            text: "Commit",
            id: Math.random(),
            completed: false
        },
        {
            text: "Repeat",
            id: Math.random(),
            completed: false
        }
    ]
}

const store = createStore(reducer, initialState)

export default store