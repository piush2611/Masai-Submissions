export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (item) => ({
    type: ADD_TODO,
    payload: item
})

export const toggleItem = (item) => ({
    type: TOGGLE_ITEM,
    payload: item
})

export const removeToDo = id => ({
    type: REMOVE_TODO,
    payload: id
})