// import axios from 'axios'
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
export const BOOK_MEETING_ROOM = 'BOOK_MEETING_ROOM'
export const FILTER_BY_FLOOR_NUMBER = 'FILTER_BY_FLOOR_NUMBER'
export const SORT = 'SORT'
export const NEW_REGISTRATION = 'NEW_REGISTRATION'
export const SEARCH_BY_DATE = "SEARCH_BY_DATE"
export const CANCEL_BOOKING = 'CANCEL_BOOKING'
export const IS_SAME_USER = 'IS_SAME_USER'

export const setLoginStatus = (payload) => ({
    type: SET_LOGIN_STATUS,
    payload
})

export const bookMeetingRoom = (payload) => ({
    type: BOOK_MEETING_ROOM,
    payload
})

export const filterByFloor = (payload) => ({
    type: FILTER_BY_FLOOR_NUMBER,
    payload
})

export const sort = (payload) => ({
    type: SORT,
    payload
})

// export const checkLogin = (payload) => {
//     return dispatch => {
//         return axios.post('http://localhost:8080/auth/login', payload)
//                     .then( res => {
//                         console.log(res)
//                         return dispatch(login(res.data.token))
//                     })
//                     .catch(err => console.log(err))
//     }
// }

// export const register = (payload) => {
//     return dispatch => {
//          axios.post('http://localhost:8080/auth/register', payload)
//               .then(res => {
//                     alert(res.data.message)
//                 })
//               .catch(err => console.log(err))
//         }   
// }

export const searchByDate = (payload) => ({
    type : SEARCH_BY_DATE,
    payload
})

export const cancelBooking = (payload) => ({
    type: CANCEL_BOOKING,
    payload
})

export const checkUser = (payload) => ({
    type: IS_SAME_USER,
    payload
})
