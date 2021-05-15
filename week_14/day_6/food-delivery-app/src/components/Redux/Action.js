export const MENU_DATA = 'MENU_DATA'
export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SEARCHED_FOOD = "SEARCHED_FOOD"
export const SORT_BY_CATEGORY = 'SORT_BY_CATEGORY'
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const NEW_RESTAURANT_REGISTRATION = 'NEW_RESTAURANT_REGISTRATION'
export const LOGOUT = 'LOGOUT'

export const menuData = (payload) => ({
    type: MENU_DATA,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const incQty = (payload) => ({
    type: INCREMENT_QUANTITY,
    payload
})

export const decQty = (payload) => ({
    type: DECREMENT_QUANTITY,
    payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
})


export const sortByCategory = (payload) => ({
    type: SORT_BY_CATEGORY,
    payload
})

export const loginCheck = (payload) => ({
    type: LOGIN_CHECK,
    payload
})

export const newRegistration = (payload) => ({
    type: NEW_RESTAURANT_REGISTRATION,
    payload
})

export const logout = (payload) => ({
    type: LOGOUT,
    payload
})






