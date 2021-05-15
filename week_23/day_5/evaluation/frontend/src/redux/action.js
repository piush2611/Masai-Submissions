import axios from 'axios'
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


export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

export const registrationRequest = (payload) => ({
    type: REGISTRATION_REQUEST,
    payload
})

export const registrationSuccess = (payload) => ({
    type: REGISTRATION_SUCCESS,
    payload
})

export const registrationFailure = (payload) => ({
    type: REGISTRATION_FAILURE,
    payload
})

export const dataFetchRequest = (payload) => ({
    type: DATA_FETCH_REQUEST,
    payload
})

export const dataFetchSuccess = (payload) => ({
    type: DATA_FETCH_SUCCESS,
    payload
})

export const dataFetchFailure = (payload) => ({
    type: DATA_FETCH_FAILURE,
    payload
})

export const employeeAdded = (payload) => ({
    type: ADD_EMPLOYEE_SUCCESS,
    payload
})

export const employeeDeleted = (payload) => ({
    type: DELETE_EMPLOYEE_SUCCESS,
    payload
})

export const employeeUpdated = (payload) => ({
    type: UPDATE_EMPLOYEE_SUCCESS,
    payload
})

export const employeeDetails = (payload) => ({
    type: EMPLOYEE_DETAILS,
    payload
})

export const logout = (payload) => ({
    type: LOGOUT,
    payload
})

export const fetchDepartmentNamesSuccess = (payload) => ({
    type: FETCH_DEPARTMENT_NAMES_SUCCESS,
    payload
})

export const fetchTotalCountSuccess = (payload) => ({
    type: FETCH_TOTAL_COUNT_SUCCESS,
    payload
})



// async actions

export const registration = ({ username, password, email}) => {
    return dispatch => {
        dispatch(registrationRequest())
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/register',
            data : {
                username : username,
                password : password,
                email : email
            }
        })
        .then( res => dispatch(registrationSuccess(res.data)))
        .catch(err => dispatch(registrationFailure(err)))
    }
}

export const login = ({ username, password }) => {
    return dispatch => {
        dispatch(loginRequest())
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/login',
            data : {
                username : username,
                password : password
            }
        })
        .then( res => dispatch(loginSuccess(res.data)))
        .catch(err => dispatch(loginFailure(err)))
    }
}

export const dataFetch = () => {
    return dispatch => {
        dispatch(dataFetchRequest())
        return axios({
            method : 'get',
            baseURL : 'http://127.0.0.1:5000/'
        })
        .then( res => dispatch(dataFetchSuccess(res.data.employees)))
        .catch(err => dispatch(dataFetchFailure(err)))
    }
}

export const addEmployee = ({ name, department, gender, salary}) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/employee/create',
            data : {
                name : name,
               department :department,
                gender : gender,
                salary : salary
            }
        })
        .then( res => dispatch(employeeAdded(res.data)))
        .catch(err => console.log(err))
    }
}

export const deleteEmployee = (id) => {
    return dispatch => {
        return axios({
            method : 'delete',
            baseURL : `http://127.0.0.1:5000/employee/delete/${id}`
        })
        .then(res => {
            dispatch(employeeDeleted(res.data))
            dispatch(dataFetch())
        })
        .catch(err => console.log(err))
    }
}

export const fetchingEmployeeDetails = (id) =>{
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/employee/read/${id}`
        })
        .then(res => dispatch(employeeDetails(res.data.employee)))
        .catch(err => console.log(err))
    }
} 

export const updateEmployee = (id) => {
    return dispatch => {
        return axios({
            method : 'put',
            baseURL : `http://127.0.0.1:5000/employee/update/${id}`
        })
        .then(res => dispatch(employeeUpdated(res.data)))
        .catch(err => console.log(err))
    }
}

export const fetchDepartmentNames = () => {
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : 'http://127.0.0.1:5000/employee/departments'
        })
        .then(res => dispatch(fetchDepartmentNamesSuccess(res.data.departments[0]['dept'].split(','))))
        .catch(err => console.log(err))
    }
}

export const fetchDataByPageNo = (pageNo) => {
    return dispatch => {
        dispatch(dataFetchRequest)
        return axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/pagination/${pageNo}`
        })
        .then(res => dispatch(dataFetchSuccess(res.data.employees)))
        .catch(err => dispatch(dataFetchFailure(err)))
    }
}

// fetching count of employees from server
export const count = () => {
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : 'http://127.0.0.1:5000/count'
        })
        .then( res => {
            dispatch(fetchTotalCountSuccess(res.data.count.count))
            console.log(res.data.count)
        } )
    }
}


export const filterBy = (payload) => {
    return dispatch => {
        if( payload == 'all'){
            
            return axios({
                method : 'get',
                baseURL : `http://127.0.0.1:5000/filter/${payload}`
            })
            .then( res => {
                dispatch(count())
                dispatch(dataFetchSuccess(res.data.employees))
            })
            .catch(err => dispatch(dataFetchFailure(err)))
        }
        else{
        return axios({
            method : 'post',
            baseURL : `http://127.0.0.1:5000/count`,
            data : {
                operation : payload
            }
        })
        .then( res => {
            dispatch(fetchTotalCountSuccess(res.data.count.count))
            return axios({
                method : 'get',
                baseURL : `http://127.0.0.1:5000/filter/${payload}`
            })
            .then( res => dispatch(dataFetchSuccess(res.data.employees)))
            .catch(err => dispatch(dataFetchFailure(err)))
        })
        .catch(err => console.log(err))
    }

    }
}

export const sortBy = ({order, filter}) => {
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/sort/${order}`
        })
        .then(res => dispatch(dataFetchSuccess(res.data.employees)))
        .catch(err => dispatch(dataFetchFailure(err)))
    }
}


