import { SET_LOGIN_STATUS, SORT, BOOK_MEETING_ROOM,CANCEL_BOOKING, FILTER_BY_FLOOR_NUMBER, SEARCH_BY_DATE } from './action'

// All images taken from unsplash.com website 
const initialState = {
    database : [
        {
            id : 1,
            floor: 1,
            name : 'Meeting room -1',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 20200321,
            src : "https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 2,
            floor: 1,
            name : 'Meeting room -2',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 20200311,
            src : "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 3,
            floor: 1,
            name : 'Meeting room -3',
            capacity : 3,
            price : 3000,
            isBooked : false,
            bookingTill : 20200221,
            src : "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 4,
            floor: 2,
            name : 'Meeting room -4',
            capacity : 7,
            price : 7000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 5,
            floor: 2,
            name : 'Meeting room -5',
            capacity : 3,
            price : 3000,
            isBooked : false,
            bookingTill : 20200214,
            src : 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 6,
            floor: 2,
            name : 'Meeting room -6',
            capacity : 6,
            price : 6000,
            isBooked : false,
            bookingTill : 20200216,
            src : 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 7,
            floor: 3,
            name : 'Meeting room -7',
            capacity : 7,
            price : 7000,
            isBooked : false,
            bookingTill : 20200320,
            src : 'https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 8,
            floor: 3,
            name : 'Meeting room -8',
            capacity : 5,
            pricePerDay : 5000,
            isBooked : false,
            bookingTill : 20200228,
            src : 'https://images.unsplash.com/photo-1566005591909-920fbd219516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 9,
            floor: 3,
            name : 'Meeting room -9',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1573497161249-42447f9f6706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 10,
            floor: 3,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60    '
        },
        {
            id : 11,
            floor: 4,
            name : 'Meeting room -11',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 12,
            floor: 4,
            name : 'Meeting room -11',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src :'https://images.unsplash.com/photo-1573166364766-f30bab28e9d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 13,
            floor: 4,
            name : 'Meeting room -13',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 14,
            floor: 5,
            name : 'Meeting room -14',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0, 
            src : 'https://images.unsplash.com/photo-1567521463720-b4c72131c01d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 15,
            floor: 6,
            name : 'Meeting room -15',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 20200219,
            src : 'https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 16,
            floor: 5,
            name : 'Meeting room -16',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 20200223,
            src : 'https://images.unsplash.com/photo-1505624198937-c704aff72608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 17,
            floor: 7,
            name : 'Meeting room -17',
            capacity : 9,
            price : 9000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1515797459884-2198ccd9a184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 18,
            floor: 6,
            name : 'Meeting room -18',
            capacity : 10,
            price : 10000,
            isBooked : false,
            bookingFrom : 0,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1547565933-13a49bfa933d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 19,
            floor: 4,
            name : 'Meeting room -19',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 20200304,
            src : 'https://images.unsplash.com/photo-1571055931484-22dce9d6c510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
    ],
    database2 : [
        {
            id : 1,
            floor: 1,
            name : 'Meeting room -1',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 20200221,
            src : "https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 2,
            floor: 1,
            name : 'Meeting room -2',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 20200311,
            src : "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 3,
            floor: 1,
            name : 'Meeting room -3',
            capacity : 3,
            price : 3000,
            isBooked : false,
            bookingTill : 20200621,
            src : "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id : 4,
            floor: 2,
            name : 'Meeting room -4',
            capacity : 7,
            price : 7000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 5,
            floor: 2,
            name : 'Meeting room -5',
            capacity : 3,
            price : 3000,
            isBooked : false,
            bookingTill : 20200321,
            src : 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 6,
            floor: 2,
            name : 'Meeting room -6',
            capacity : 6,
            price : 6000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 7,
            floor: 3,
            name : 'Meeting room -7',
            capacity : 7,
            price : 7000,
            isBooked : false,
            bookingTill : 20200720,
            src : 'https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 8,
            floor: 3,
            name : 'Meeting room -8',
            capacity : 5,
            pricePerDay : 5000,
            isBooked : false,
            bookingTill : 20200228,
            src : 'https://images.unsplash.com/photo-1566005591909-920fbd219516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 9,
            floor: 3,
            name : 'Meeting room -9',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1573497161249-42447f9f6706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 10,
            floor: 3,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60    '
        },
        {
            id : 11,
            floor: 4,
            name : 'Meeting room -11',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 12,
            floor: 4,
            name : 'Meeting room -11',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src :'https://images.unsplash.com/photo-1573166364766-f30bab28e9d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 13,
            floor: 4,
            name : 'Meeting room -13',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 14,
            floor: 5,
            name : 'Meeting room -14',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0, 
            src : 'https://images.unsplash.com/photo-1567521463720-b4c72131c01d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 15,
            floor: 6,
            name : 'Meeting room -15',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 16,
            floor: 5,
            name : 'Meeting room -16',
            capacity : 5,
            price : 5000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1505624198937-c704aff72608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 17,
            floor: 7,
            name : 'Meeting room -17',
            capacity : 9,
            price : 9000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1515797459884-2198ccd9a184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 18,
            floor: 6,
            name : 'Meeting room -18',
            capacity : 10,
            price : 10000,
            isBooked : false,
            bookingFrom : 0,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1547565933-13a49bfa933d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            id : 19,
            floor: 4,
            name : 'Meeting room -19',
            capacity : 8,
            price : 8000,
            isBooked : false,
            bookingTill : 0,
            src : 'https://images.unsplash.com/photo-1571055931484-22dce9d6c510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
    ],
    bookedMeetingRooms : [],
    loginStatus : false,
    userId : '', 
    bookingId : 1,
    isSameUser : false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_LOGIN_STATUS:
        return { 
            ...state,
            loginStatus : !state.loginStatus,
            userId : payload
            }

    case BOOK_MEETING_ROOM:
        let room = state.database.filter(e => e.id === Number(payload.id))
        return {
            ...state,
            bookingId: state.bookingId + 1,
            database: state.database.filter(e => e.id !== Number(payload.id)),
            database2: state.database2.filter(e => e.id !== Number(payload.id)),
            bookedMeetingRooms : [...state.bookedMeetingRooms, room[0]]
        }

    case SORT:
        let sortOrder = payload.sortOrder
        let sortBy = payload.sortBy
        if( sortOrder === 'asc'){
            return {
                ...state,
                database: [...state.database.sort((a,b) => a[sortBy] - b[sortBy] )]
            }
        }
        else if( sortOrder === 'desc') {
            return {
                ...state,
                database: [...state.database.sort((a,b) => b[sortBy] - a[sortBy])]
            }
        }
        break

    case FILTER_BY_FLOOR_NUMBER:
        if(payload === 'all'){
            return{
                ...state,
                database: [...state.database2]
            }
        }
        else {
            return{
                ...state,
                database: [...state.database2.filter(e => e.floor === Number(payload))]
            }
        }

    case SEARCH_BY_DATE:
        return {
            ...state,
            database: state.database.filter(room => room.bookingTill > Number(payload) || room.bookingTill === 0 )
        }
        
    case CANCEL_BOOKING:
        let rm = state.bookedMeetingRooms.filter(e => e.id === Number(payload))
        return{
            ...state,
            bookedMeetingRooms: state.bookedMeetingRooms.filter(e => e.id !== Number(payload)),
            database: [...state.database, rm[0]],
            database2: [...state.database2, rm[0]]
        }
    default:
        return state
    }
}
