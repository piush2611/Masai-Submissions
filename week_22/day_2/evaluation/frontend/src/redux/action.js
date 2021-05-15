import axios from 'axios'
// export const USER_LOGIN = 'USER_LOGIN'
// export const USER_REGISTER = 'USER_REGISTER'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const AXIOS_CALL_FAILURE = 'AXIOS_CALL_FAILURE'
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS'
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS'
export const FETCH_ALBUMS_BY_ARTIST_SUCCESS = 'FETCH_ALBUMS_BY_ARTIST_SUCCESS'
export const FETCH_COUNT_OF_ALBUMS = 'FETCH_COUNT_OF_ALBUMS'
export const NEW_ALBUM_SUCCESSFULLY_ADDED = 'NEW_ALBUM_SUCCESSFULLY_ADDED'
export const NEW_ARTIST_SUCCESSFULLY_ADDED = 'NEW_ARTIST_SUCCESSFULLY_ADDED'
export const ALBUM_DELETE_SUCCESS = 'ALBUM_DELETE_SUCCESS'
export const ALBUM_EDIT_SUCCESS = 'ALBUM_EDIT_SUCCESS'
export const FETCH_DATA_FOR_EDITING_ALBUM = 'FETCH_DATA_FOR_EDITING_ALBUM'
export const LOGOUT = 'LOGOUT'

export const axiosCallFailure = (payload) => ({
    type: AXIOS_CALL_FAILURE,
    payload
})

export const loginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})

export const registrationSuccess = (payload) => ({
    type: USER_REGISTRATION_SUCCESS,
    payload
})

export const albumsFetchSuccess = (payload) => ({
    type: FETCH_ALBUMS_SUCCESS,
    payload
})

export const artistsFetchSuccess = (payload) => ({
    type: FETCH_ARTISTS_SUCCESS,
    payload
})

export const addNewAlbumSuccess = (payload) => ({
    type: NEW_ALBUM_SUCCESSFULLY_ADDED,
    payload
})

export const addNewArtistSuccess = (payload) => ({
    type: NEW_ARTIST_SUCCESSFULLY_ADDED,
    payload
})

export const albumDeleted = (payload) => ({
    type: ALBUM_DELETE_SUCCESS,
    payload
})

export const albumEdited = (payload) => ({
    type: ALBUM_EDIT_SUCCESS,
    payload
})

export const dataFetchedForEditingAlbum = (payload) => ({
    type: FETCH_DATA_FOR_EDITING_ALBUM,
    payload
})

export const logout = (payload) => ({
    type: LOGOUT,
    payload
})




// login
export const login = ({ username, password }) => {
    return dispatch => {
        return axios({
                method: 'post',
                baseURL : `http://127.0.0.1:5000/login`,
                data: {
                    username: username,
                    password: password
                }
            })
            .then(res => {
                console.log(res)
                return dispatch(loginSuccess(res.data))
            })
            .catch(err => console.log(err))
    }
}

// new registration
export const newRegistration = ({username, password, email, admin}) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : `http://127.0.0.1:5000/register`,
            data : {
                username : username,
                email : email,
                password : password,
                admin : 0
            }
        })
        .then(res => {
            console.log(res)
            return dispatch(registrationSuccess(res.data.message))
        })
        .catch(err => console.log(err))
    }
}

// getting all albums
export const fetchAlbums = () => {
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/read`
        })
        .then(res => {
            console.log(res.data)
            return dispatch(albumsFetchSuccess(res.data.albums))
        })
        .catch(err => console.log(err))
    }
}

// getting all artists
export const fetchArtists = () => {
    return dispatch => {
        return axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/artist/read`
        })
        .then(res => {
            console.log(res.data)
            return dispatch(artistsFetchSuccess(res.data.artists))
        })
        .catch(err => console.log(err))
    }
}

// getting albums by particular artist
export const fetchAlbumsByArtistName = (artistName) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : `http://127.0.0.1:5000/filter`,
            data : { artistName : artistName }
        })
        .then(res => {
            console.log(res.data)
            return dispatch(albumsFetchSuccess(res.data.albums))
        })
        .catch(err => console.log(err))
    }
}

// sorting of albums 
export const getSortedAlbums = (order) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/sort',
            data : { order : order}
        })
        .then(res => {
            console.log(res.data)
            return dispatch(albumsFetchSuccess(res.data.albums))
        })
        .catch(err => console.log(err))
    }
}

// adding new album
export const addNewAlbum = ({albumName, artistName, year}) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/album/create',
            data : {
                albumName : albumName,
                artist : artistName,
                year : year
            }
        })
        .then(res => {
            console.log(res.data)
            return dispatch(addNewAlbumSuccess(res.data.message))
        })
        .catch(err => console.log(err))
    }
}

// adding new artist
export const addNewArtist = (artist) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/artist/create',
            data : {
                artist : artist
            }
        })
        .then(res => {
            console.log(res.data)
            return dispatch(addNewArtistSuccess(res.data.message))
        })
        .catch(err => console.log(err))
    }
}

// delete album
export const deleteAlbum = (id) => {
    return dispatch => {
        return axios({
            method : 'delete',
            baseURL : `http://127.0.0.1:5000/album/delete`,
            data : {
                id : id
            }
        })
        .then(res => {
            console.log(res)
            return dispatch(albumDeleted(res.data.message))
        })
        .catch(err => console.log(err))
    }
}

// fetching info for editing purpose
export const getData = (id) => {
    return dispatch => {
        return axios({
            method : 'post',
            baseURL : `http://127.0.0.1:5000/album/read`,
            data : {
                id : id
            }
        })
        .then(res => {
            console.log(res)
            return dispatch(dataFetchedForEditingAlbum(res.data.album))
        })
        .catch(err => console.log(err))
    }
}

// updating album
export const updateAlbum = ({albumName, artistName, year, id}) => {
    return dispatch => {
        return axios({
            method : 'put',
            baseURL : 'http://127.0.0.1:5000/album/update',
            data : {
                albumName : albumName,
                artistName : artistName,
                year : year,
                id : id
            }
        })
        .then(res => {
            console.log(res.data)
            return dispatch(albumEdited(res.data.message))
        })
        .catch(err => console.log(err))
    }
}



// getting count of albums for pagination purpose
// export const gettingCountOfAlbums = () => {
//     return dispatch => {
//         return axios({
//             method : 'get',
//             baseURL : 
//         })
//     }
// }
