import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    DATA_FETCH_REQUEST,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAILURE,
    ADD_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    EMPLOYEE_DETAILS,
    LOGOUT,
    FETCH_DEPARTMENT_NAMES_SUCCESS,
    FETCH_TOTAL_COUNT_SUCCESS
} from './actionTypes'

const initialState = {
    isLogin : false,
    data : [],
    employeeDetail : [],
    loading : false,
    deptNames : [],
    msg : null,
    token : null,
    error : false,
    count : 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case REGISTRATION_REQUEST:
        return { 
            ...state, 
            loading : true
        }

    case REGISTRATION_SUCCESS:
        return{
            ...state,
            loading : false,
            msg : payload.message,
            error : payload.error
        }

    case REGISTRATION_FAILURE:
        return{
            ...state,
            loading : false,
            msg : payload.message,
            error : payload.error
        }

    case LOGIN_REQUEST:
        return { 
            ...state, 
            loading : true
        }

    case LOGIN_SUCCESS:
        console.log(payload)
        return{
            ...state,
            loading : false,
            isLogin : true,
            token : payload.token,
            error : payload.error
        }

    case LOGIN_FAILURE:
        return{
            ...state,
            loading : false,
            msg : payload.message,
            error : payload.error
        }

    case DATA_FETCH_REQUEST:
        return { 
            ...state, 
            loading : true
        }

    case DATA_FETCH_SUCCESS:
        console.log(payload)
        return{
            ...state,
            loading : false,
            data : [...payload]
        }

    case DATA_FETCH_FAILURE:
        return{
            ...state,
            loading : false,
            msg : payload.message,
            error : payload.error
        }

    case ADD_EMPLOYEE_SUCCESS:
        return{
            ...state,
            msg : payload.message,
            error : payload.error
        }
    
    case DELETE_EMPLOYEE_SUCCESS:
        return{
            ...state,
            msg : payload.message,
            error : state.error
        }
    
    case UPDATE_EMPLOYEE_SUCCESS:
        return{
            ...state,
            msg : payload.message,
            error : payload.error 
        }
    case EMPLOYEE_DETAILS:
        return{
            ...state,
            employeeDetail : [...payload.employee]
        }
    
    case LOGOUT:
        return{
            ...state,
            loading : false,
            token : null,
            isLogin : false,
            error : null
        }
    case FETCH_DEPARTMENT_NAMES_SUCCESS:
        return {
            ...state,
            deptNames : [...payload]
        }
    
    case FETCH_TOTAL_COUNT_SUCCESS:
        console.log(payload)
        return{
            ...state,
            count : Number(payload)
        }

    default:
        return state
    }
}
