export const ADD_PRODUCT = 'ADD_PRODUCT'
export const FILTER = 'FILTER'
export const LOGIN = 'LOGIN'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const ADD_TO_CART = 'ADD_TO_CART'
export const INC_QUANTITY = 'INC_QUANTITY'
export const DEC_QUANTITY = 'DEC_QUANTITY'
export const ORDERS_PLACED = 'ORDERS_PLACED'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

export const filter = (payload) => ({
    type: FILTER,
    payload
})

export const login = (payload) => ({
    type: LOGIN,
    payload
})

export const delProduct = (payload) => ({
    type: DELETE_PRODUCT,
    payload
})

export const editProduct = (payload) => ({
    type: EDIT_PRODUCT,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const incQty = (payload) => ({
    type: INC_QUANTITY,
    payload
})

export const decQty = (payload) => ({
    type: DEC_QUANTITY,
    payload
})

export const totalOrdersPlaced = (payload) => ({
    type: ORDERS_PLACED,
    payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
})













