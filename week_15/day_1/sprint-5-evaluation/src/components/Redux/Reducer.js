import { LOGIN, ADD_NEW, ADD_COMMENT,  FILTER_BY_CATEGORY, SORT_BY_DATE } from './Action'

const initialState = {
    data:[
        {
            id:1,
            title: "Lorem ipsum",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"random",
            date:12345678,
            username:"random123",
            comments: ["Lorem, ipsum dolor."]
        },
        {
            id:2,
            title: " dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"general",
            date:2545631245,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:3,
            title: " ipsum dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"programming",
            date:14655562,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:4,
            title: "amet dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"algorithm",
            date:8451546468,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:5,
            title: "dolor dolor sit amet sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"suggestions",
            date:265554,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:6,
            title: "Lorem amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"random",
            date:55151,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:7,
            title: "Lorem sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"general",
            date:61515,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:8,
            title: " ipsum amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"programming",
            date:51545151,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:9,
            title: "Lorem idolor sit amet amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"algorithm",
            date:5515415,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:10,
            title: "d amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"suggestions",
            date:4841554,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        }
    ],
    data2:[
        {
            id:1,
            title: "Lorem ipsum",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"random",
            date:12345678,
            username:"random123",
            comments: ["Lorem, ipsum dolor."]
        },
        {
            id:2,
            title: " dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"general",
            date:2545631245,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:3,
            title: " ipsum dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"programming",
            date:14655562,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:4,
            title: "amet dolor sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"algorithm",
            date:8451546468,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:5,
            title: "dolor dolor sit amet sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"suggestions",
            date:265554,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:6,
            title: "Lorem amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"random",
            date:55151,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:7,
            title: "Lorem sit amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"general",
            date:61515,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:8,
            title: " ipsum amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"programming",
            date:51545151,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:9,
            title: "Lorem idolor sit amet amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"algorithm",
            date:5515415,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        },
        {
            id:10,
            title: "d amet",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sint sequi harum mollitia voluptatibus deserunt aliquam at eum delectus doloribus est nisi facilis atque praesentium nemo accusantium fugiat ut voluptates cupiditate, reiciendis neque temporibus doloremque? Esse rerum quidem neque mollitia asperiores autem totam nemo molestias, inventore, molestiae, odio aspernatur at.",
            category:"suggestions",
            date:4841554,
            username:"random123",
            comments:["Lorem, ipsum dolor."]
        }
    ],
    login:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN:
        return {
            ...state,
            login: true
        }
    case ADD_NEW:
        return {
            ...state,
            data2: [...state.data2, payload],
            data: [...state.data2]
        }
    case ADD_COMMENT:
        return {
            ...state,
            data: state.data.map(e => {
                if(e.id == payload.id){
                    e.comments.push(payload.comment)
                }
                return e
            }),
            data: [...state.data2]
        }
    case FILTER_BY_CATEGORY:
        if(payload == "all"){
            return {
                ...state,
                data: [...state.data2]
            }
        }
        else {
            return {
                ...state,
                data: state.data2.filter(e => e.category == payload)
            }
        }
    case SORT_BY_DATE:
        if(payload == 'asc'){
            return {
                ...state,
                data: [...state.data2.sort((a,b) => a.date - b.date)]
            }
        }
        else if(payload == "desc"){
            return {
                ...state,
                data: [...state.data2.sort((a,b) => b.date - a.date)]
            }
        }
    default:
        return state
    }
}
