import { ADD_PRODUCT, ORDERS_PLACED, LOGIN, FILTER,GET_TOTAL, EDIT_PRODUCT, DELETE_PRODUCT, ADD_TO_CART, INC_QUANTITY, DEC_QUANTITY, REMOVE_FROM_CART } from './Action'

const initialState = {
    data:[
        {
            id:1,
            title:"Nokia 5i (Forest Green, 64 GB)",
            price:8999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1550367083-9fa5411cb303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            title:"Apple 5i (Forest Green, 64 GB)",
            price:7999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            title:"Realme 5i (Forest Green, 64 GB)",
            price:12999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.pexels.com/photos/1202575/pexels-photo-1202575.jpeg?https://images.unsplash.com/photo-1510297182321-a75bdc5b1299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:4,
            title:"LG 5i (Forest Green, 64 GB)",
            price:11999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1524856076870-0d765c831d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:5,
            title:"Apple 5i (Forest Green, 64 GB)",
            price:9999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1476039863276-5b0ebbbc488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            category:"watches",
            count:1,
            id:6,
            title:"NG38003PP05C Tees Sports Watch",
            price:599,
            rating:4.7,
            src:"https://images.pexels.com/photos/158741/gshock-watch-sports-watch-stopwatch-158741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:7,
            title:"NG38003PP05C Tees Analog Watch ",
            price:699,
            rating:4.2,
            src:"https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:8,
            title:"NG38003PP05C Sports Watch",
            price:899,
            rating:4.2,
            src:"https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:9,
            title:"NG38003PP05C Tees Analog Watch",
            price:699,
            rating:4.2,
            src:"https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:10,
            title:"NG38003PP05C Tees Analog Watch - For Men & Women",
            price:1699,
            rating:4.2,
            src:"https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ],
    tempData:[
        {
            id:1,
            title:"Nokia 5i (Forest Green, 64 GB)",
            price:8999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1550367083-9fa5411cb303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            title:"Apple 5i (Forest Green, 64 GB)",
            price:7999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            title:"Realme 5i (Forest Green, 64 GB)",
            price:12999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.pexels.com/photos/1202575/pexels-photo-1202575.jpeg?https://images.unsplash.com/photo-1510297182321-a75bdc5b1299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:4,
            title:"LG 5i (Forest Green, 64 GB)",
            price:11999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1524856076870-0d765c831d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:5,
            title:"Apple 5i (Forest Green, 64 GB)",
            price:9999,
            rating:4.6,
            category:"mobile",
            count:1,
            src:"https://images.unsplash.com/photo-1476039863276-5b0ebbbc488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            category:"watches",
            count:1,
            id:6,
            title:"NG38003PP05C Tees Sports Watch",
            price:599,
            rating:4.7,
            src:"https://images.pexels.com/photos/158741/gshock-watch-sports-watch-stopwatch-158741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:7,
            title:"NG38003PP05C Tees Analog Watch ",
            price:699,
            rating:4.2,
            src:"https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:8,
            title:"NG38003PP05C Sports Watch",
            price:899,
            rating:4.2,
            src:"https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:9,
            title:"NG38003PP05C Tees Analog Watch",
            price:699,
            rating:4.2,
            src:"https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            category:"watches",
            count:1,
            id:10,
            title:"NG38003PP05C Tees Analog Watch - For Men & Women",
            price:1699,
            rating:4.2,
            src:"https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ],
    login: false,
    cart:false,
    cartData:[],
    userType:"",
    ordersPlaced:[],
    total:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_PRODUCT:
        return {
            ...state,
            data: [...state.data, payload],
            tempData: [...state.data]
        }
    case REMOVE_FROM_CART:
        return {
            ...state,
            cartData: state.cartData.map(e => {
                if(e.id == payload){
                    e.count = 1
                }
                return e
            }),
            cartData: state.cartData.filter(e => e.id != payload)
            
        }
    case ORDERS_PLACED:
        return {
            ...state,
            ordersPlaced: [...state.ordersPlaced, ...payload],
            cartData: []
        }
    case INC_QUANTITY:
        return{
            ...state,
            cartData: state.cartData.map(e => {
                if(e.id == payload){
                    e.count= e.count+1
                }
                return e
            })
        }
    case DEC_QUANTITY:
            return{
                ...state,
                cartData: state.cartData.map(e => {
                    if(e.id == payload){
                        e.count= e.count-1
                        if(e.count == 0){
                            state.cart= false
                        }
                    }
                    return e
                })
            }
    case ADD_TO_CART:
        let productToBeAdded = state.data.filter(e => e.id == payload)
        let alreadyInCart = state.cartData.filter(e => e.id == payload)
        if(alreadyInCart.length){
            alert("Product already in cart")
            return{
                ...state,
                tempData: [...state.data]
            }
        }
        else {
            return{
                ...state,
                cart: true,
                cartData: [...state.cartData, productToBeAdded[0] ]
            }
        }
    case FILTER:
        if(payload == ""){
            return {
                ...state,
                tempData: [...state.data]
            }
        }
        else {
            return {
                ...state,
                tempData: state.data.filter(e => e.category == payload)
            }
        }
    case LOGIN:
        return{
            ...state,
            login: true,
            userType: payload
        }
    case DELETE_PRODUCT:
        return{
            ...state,
            data: state.data.filter(e => e.id != payload),
            tempData: state.data
        }
    case EDIT_PRODUCT:
        return{
            ...state,
            data: state.data.map(e => e.id == payload.id ? payload : e),
            tempData: state.data
        }
    default:
        return state
    }
}
