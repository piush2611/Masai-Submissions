import { MENU_DATA, LOGOUT, ADD_TO_CART,LOGIN_CHECK, NEW_RESTAURANT_REGISTRATION, INCREMENT_QUANTITY,SORT_BY_CATEGORY, DECREMENT_QUANTITY, REMOVE_FROM_CART, SEARCHED_FOOD } from './Action'

const initialState = {
    data:[
        {
            id:1,
            src:"https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Zero mile bengal",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:2,
            src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Zero mile punjab",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:3,
            src:"https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:99,
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"North Indian",
            title:"Paradise Biryani",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:4,
            src:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Mad over biryani",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:5,
            src:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:6,
            src:"https://image.shutterstock.com/image-photo/assorted-indian-food-on-dark-600w-573575497.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Uduppi Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:7,
            src:"https://image.shutterstock.com/image-photo/typical-curry-set-meal-meals-260nw-419909197.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:8,
            src:"https://image.shutterstock.com/image-photo/typical-indian-curry-lunch-260nw-361128938.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:9,
            src:"https://image.shutterstock.com/image-photo/appam-mixed-dal-rava-appe-260nw-465441173.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Appe restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:10,
            src:"https://image.shutterstock.com/image-photo/sambar-vada-indian-dish-600w-305592881.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Royal south Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        }
    ],
    data2:[
        {
            id:1,
            src:"https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Zero mile bengal",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:2,
            src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Zero mile punjab",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:3,
            src:"https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:99,
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"North Indian",
            title:"Paradise Biryani",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:4,
            src:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Mad over biryani",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:5,
            src:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=500&q=60",
            price:99,
            rating:4.2,
            discount:"10 % OFF",
            cuisine:"North Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Chicken Masala", price:120, src:"https://image.shutterstock.com/image-photo/traditional-indian-dish-chicken-spicy-600w-1044708421.jpg"},
                {id:2, count:1, title:"Chicken Tikka", price:230, src:"https://image.shutterstock.com/image-photo/chicken-skew-kebabtraditional-indian-dish-260nw-549085792.jpg"},
                {id:3, count:1, title:"Biryani", price:250, src:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg" },
                {id:4, count:1, title:"Butter Chicken", price:350, src:"https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg"},
                {id:5, count:1, title:"Chicken tangari", price:380, src:"https://image.shutterstock.com/image-photo/chicken-tangri-leg-piece-marinated-600w-277848122.jpg"},
                {id:6, count:1, title:"Mutton Biryani", price:250, src:"https://image.shutterstock.com/image-photo/kashmiri-mutton-gosht-lamb-biryani-600w-639329899.jpg"}
            ]
        },
        {
            id:6,
            src:"https://image.shutterstock.com/image-photo/assorted-indian-food-on-dark-600w-573575497.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Uduppi Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:7,
            src:"https://image.shutterstock.com/image-photo/typical-curry-set-meal-meals-260nw-419909197.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:8,
            src:"https://image.shutterstock.com/image-photo/typical-indian-curry-lunch-260nw-361128938.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Empire Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:9,
            src:"https://image.shutterstock.com/image-photo/appam-mixed-dal-rava-appe-260nw-465441173.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Appe restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        },
        {
            id:10,
            src:"https://image.shutterstock.com/image-photo/sambar-vada-indian-dish-600w-305592881.jpg",
            rating:4.2,
            discount:"15 % OFF",
            cuisine:"South Indian",
            title:"Royal south Restaurant",
            menu:[ 
                {id:1, count:1, title:"Masala Dosa", price:120, src:"https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg"},
                {id:2, count:1, title:"Idli Sambhar", price:230, src:"https://image.shutterstock.com/image-photo/idli-idly-coconut-chutney-sambhar-260nw-625409105.jpg"},
                {id:3, count:1, title:"Traditional Thali", price:250, src:"https://image.shutterstock.com/image-photo/curry-set-meal-meals-260nw-444891538.jpg" },
                {id:4, count:1, title:"Poori Saagu", price:350, src:"https://image.shutterstock.com/image-photo/spicy-chole-bhautre-green-chili-260nw-259476287.jpg"},
                {id:5, count:1, title:"Rava dosa", price:380, src:"https://image.shutterstock.com/image-photo/rava-dosa-served-sambar-south-260nw-744992302.jpg"},
                {id:6, count:1, title:"Coconut rice", price:250, src:"https://image.shutterstock.com/image-photo/coconut-ricesouth-indian-food-600w-84991402.jpg"}
            ]
        }
    ],
    login:false,
    userType:"",
    menuDb:[],
    cartData:[],
    newRestaurantsRequests:[]
}



export default (state = initialState, { type, payload }) => {
    switch (type) {

    case MENU_DATA:
        return{
            ...state,
            menuDb: state.data.filter(e => e.id == payload)[0].menu
        }
    case LOGOUT:
        return {
            ...state,
            login: false,
            userType:""
        }
    case ADD_TO_CART:
        return{
            ...state,
            cartData: [...state.cartData, ...state.menuDb.filter(e => e.id == payload)]
        }
    case SORT_BY_CATEGORY:
        if(payload == "All"){
            return {
                ...state,
                data: [...state.data2]
            }
        }
        else {
            return {
                ...state,
                data: state.data2.filter(e => e.cuisine == payload)
            }
        }
    case NEW_RESTAURANT_REGISTRATION:
        return {
            ...state,
            newRestaurantsRequests: [...state.newRestaurantsRequests, payload]
        }
    case LOGIN_CHECK:
        return{
            ...state,
            login: true,
            userType: payload
        }
    case REMOVE_FROM_CART:
        return{
            ...state,
            cartData: state.cartData.map(e => {
                if(e.id == payload){
                    e.count= 1
                }
                return e
            }),
            cartData: state.cartData.filter(e => e.id != payload)
        }
    case INCREMENT_QUANTITY:
        return {
            ...state,
            cartData: state.cartData.map(e => {
                if(e.id == payload){
                    e.count= e.count+1
                }
                return e
            })
        }
    case DECREMENT_QUANTITY:
        return{
            ...state,
            cartData: state.cartData.map(e => {
                if(e.id == payload){
                    e.count= e.count-1
                }
                return e
            })
        }
    default:
        return state
    }
}
