import {USER_REGISTRATION_SUCCESS, USER_LOGIN_SUCCESS, FETCH_ALBUMS_SUCCESS,LOGOUT, FETCH_ARTISTS_SUCCESS, ALBUM_EDIT_SUCCESS, ALBUM_DELETE_SUCCESS, FETCH_DATA_FOR_EDITING_ALBUM} from './action'

const initialState = {
    loginStatus : false,
    albumsDb : [],
    artistArr : [],
    token : '',
    message : '',
    isAdmin : false,
    dataForEditingAlbum : []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case USER_LOGIN_SUCCESS:
        return { 
            ...state,
            loginStatus : true,
            token : payload.token,
            isAdmin : payload.isAdmin,
            message : payload.message
         }
    case LOGOUT:
        return{
            ...state,
            loginStatus : false,
            token: null
        }
    case USER_REGISTRATION_SUCCESS:
        return{
            ...state,
            message : payload
        }
    case FETCH_ALBUMS_SUCCESS:
        return {
            ...state,
            albumsDb : [...payload]
        }
    case FETCH_ARTISTS_SUCCESS:
        return {
            ...state,
            artistArr : [...payload]
        }
    case ALBUM_DELETE_SUCCESS:
        return {
            ...state,
            message : payload
        }
    case ALBUM_EDIT_SUCCESS:
        return{
            ...state,
            message : payload
        }
    case FETCH_DATA_FOR_EDITING_ALBUM:
        return {
            ...state,
            dataForEditingAlbum : [...payload]
        }
    default:
        return state
    }
}
