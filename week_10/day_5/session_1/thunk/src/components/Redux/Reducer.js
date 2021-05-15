import { RETURN_RESPONSE } from './Actions'

const initialState = {
    response:""
}

const reducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case RETURN_RESPONSE:
        return { ...state, response: payload }

    default:
        return state
    }
}

export default reducer