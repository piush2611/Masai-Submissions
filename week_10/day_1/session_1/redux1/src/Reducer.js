const incCounter = 'incCounter'
const decCounter = 'decCounter'
const mulCounter = 'mulCounter'
const divCounter = 'divCounter'
const showRemainder = 'showRemainder'

const initialState = {
    count: 10
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case incCounter:
            if (Number(action.amount) % 2 === 0) {
                return { count: state.count + 2 }
            }
            else {
                return { count: state.count + 1 }
            }
        case decCounter:
            return { 
                count: state.count - action.amount 
            }
        case mulCounter:
            return { 
                count: state.count * Number(action.amount) 
            }
        case divCounter:
            return { 
                count: Math.floor(state.count / Number(action.amount)) 
            }
        case showRemainder:
            return { 
                count: state.count % Number(action.amount) 
            }
        default:
            return state
    }
}

export default counter