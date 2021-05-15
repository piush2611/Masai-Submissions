export const ADD_NEW = 'ADD_NEW'
export const DELETE_VEHICLE = 'DELETE_VEHICLE'
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE'
export const SORT_ASC = 'SORT_ASC'
export const SORT_DESC = 'SORT_DESC'
export const CHECK_LOGIN = 'CHECK_LOGIN'
export const SORT_ASC_MFC = 'SORT_ASC_MFC'
export const SORT_DESC_MFC = 'SORT_DESC_MFC'

export const addVehicle = (payload) => ({
    type: ADD_NEW,
    payload
})


export const delVehicle = (payload) => ({
    type: DELETE_VEHICLE,
    payload
})

export const updateVehicle = (payload) => ({
    type: UPDATE_VEHICLE,
    payload
})

export const sortAsc = (payload) => ({
    type: SORT_ASC,
    payload
})

export const sortDesc = (payload) => ({
    type: SORT_DESC,
    payload
})

export const checkLogin = (payload) => ({
    type: CHECK_LOGIN,
    payload
})

export const sortAscMfc = (payload) => ({
    type: SORT_ASC_MFC,
    payload
})

export const sortDescMfc = (payload) => ({
    type: SORT_DESC_MFC,
    payload
})




