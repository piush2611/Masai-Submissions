export const LOGIN = 'LOGIN'
export const ADD_NEW = 'ADD_NEW'
export const ADD_COMMENT = 'ADD_COMMENT'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const SORT_BY_DATE = 'SORT_BY_DATE'

export const checkLogin = (payload) => ({
    type: LOGIN,
    payload
})

export const addNew = (payload) => ({
    type: ADD_NEW,
    payload
})

export const addComment = (payload) => ({
    type: ADD_COMMENT,
    payload
})

export const filterByCategory = (payload) => ({
    type: FILTER_BY_CATEGORY,
    payload
})

export const sortByDate = (payload) => ({
    type: SORT_BY_DATE,
    payload
})




