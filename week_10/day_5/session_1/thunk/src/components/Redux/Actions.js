import axios from 'axios'

export const RETURN_RESPONSE = 'RETURN_RESPONSE'



export const returnResponse = (payload) => ({
    type: RETURN_RESPONSE,
    payload
})

export const getUsersData = (data) => {
    return dispatch => {
        axios.post("http://localhost:8080/auth/register", data)
    .then(res => {
        console.log("response success", res)
        return dispatch(returnResponse(res.data.message)
        )
    })
    .catch(res => console.log(res))
    }
}