import { ADD_NEW, DELETE_VEHICLE, UPDATE_VEHICLE, SORT_ASC, SORT_DESC, CHECK_LOGIN, SORT_ASC_MFC, SORT_DESC_MFC } from './Action'


const initialState = {
    vehicleDatabase: [
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 1210,
            qty: 2,
            id: 1210
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 1010,
            qty: 2,
            id: 1010
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: 'Honda',
            mileage: 10,
            price: 910,
            qty: 2,
            id: 910
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 810,
            qty: 2,
            id: 810
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 710,
            price: 10,
            qty: 2,
            id: 710
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 710,
            qty: 2,
            id: 710
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 610,
            qty: 2,
            id: 610
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "Honda",
            mileage: 10,
            price: 510,
            qty: 2,
            id: 510
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: 'Honda',
            mileage: 10,
            price: 410,
            qty: 2,
            id: 40
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "tesla",
            mileage: 10,
            price: 30,
            qty: 2,
            id: 30
        },
        {
            modelNo: 12,
            modelName: "activa",
            manufacturer: "honda",
            mileage: 10,
            price: 20,
            qty: 2,
            id: 20
        }
    ],
    login: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            return {
                ...state,
                vehicleDatabase: [...state.vehicleDatabase, action.payload]
            }
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicleDatabase: state.vehicleDatabase.filter(e => e.id != action.payload)
            }
        case UPDATE_VEHICLE:
            return {
                ...state,
                vehicleDatabase: state.vehicleDatabase.map(e => e.id == action.payload.id ? action.payload : e)
            }
        case CHECK_LOGIN:
            return {
                ...state,
                login: true
            }
        case SORT_DESC:
            let sortedDesc = state.vehicleDatabase.sort((a, b) => b.price - a.price)
            return {
                ...state,
                vehicleDatabase: [...sortedDesc]
            }
        case SORT_ASC:
            let sortedAsc = state.vehicleDatabase.sort((a, b) => a.price - b.price)
            return {
                ...state,
                vehicleDatabase: [...sortedAsc]
            }
        case SORT_ASC_MFC:
            let sortedAscMfc = state.vehicleDatabase.sort((a,b) => a.manufacturer - b.manufacturer)
            console.log(sortedAscMfc)
            return {
                ...state,
                vehicleDatabase: [...sortedAscMfc]
            }
        case SORT_DESC_MFC:
            let sortedDescMfc = state.vehicleDatabase.sort((a,b) => b.manufacturer - a.manufacturer)
            return {
                ...state,
                vehicleDatabase: [...sortedDescMfc]
            }
        default:
            return state
    }
}

export default reducer