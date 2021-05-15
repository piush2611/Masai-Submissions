import React from 'react'
import ReastaurantDetails from './restaurantDetails'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [{ id: 1, votes: 776, reviews: 512, cost: 600, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "URU Restaurant", rating: 4.3, img: "./pexels-photo-370984.jpeg" },
            { id: 2, votes: 721, reviews: 522, cost: 400, category: "Continental, Pizza, Asian, Chinese", payment: "Only Online Payment Accepted", title: "Abc Restaurant", rating: 4.2, img: "./res1.jpg" },
            { id: 3, votes: 750, reviews: 412, cost: 500, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "Gulshan Restaurant", rating: 1.7, img: "./res2.jpeg" },
            { id: 4, votes: 610, reviews: 376, cost: 300, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "XYZ Restaurant", rating: 2.0, img: "./res3.jpeg" },
            { id: 5, votes: 510, reviews: 250, cost: 200, category: "Continental, Pizza, Desserts", payment: "Only cards accepted", title: "Bright Restaurant", rating: 4.1, img: "./res4.jpeg" },
            { id: 6, votes: 766, reviews: 561, cost: 1000, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "Aditya Restaurant", rating: 0.5, img: "./res5.jpeg" },
            { id: 7, votes: 352, reviews: 524, cost: 750, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "Radhika Restaurant", rating: 0.9, img: "./res6.jpg" },
            { id: 8, votes: 465, reviews: 536, cost: 450, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "Ganesh Restaurant", rating: 2.4, img: "./res7.jpeg" },
            { id: 9, votes: 477, reviews: 417, cost: 550, category: "Continental, Asian, Desserts", payment: "Only cards accepted", title: "Green Park Restaurant", rating: 2.8, img: "./res8.jpeg" },
            { id: 10, votes: 477, reviews: 417, cost: 550, category: "Continental, Asian, Desserts", payment: "Only cards accepted", title: "Green Park Restaurant", rating: 3.8, img: "./res9.jpg" }
            ],
            filteredArray: [{ id: 1, votes: 776, reviews: 512, cost: 600, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "URU Restaurant", rating: 4.3, img: "./pexels-photo-370984.jpeg" },
            { id: 2, votes: 721, reviews: 522, cost: 400, category: "Continental, Pizza, Asian, Chinese", payment: "Only Online Payment Accepted", title: "Abc Restaurant", rating: 4.2, img: "./res1.jpg" },
            { id: 3, votes: 750, reviews: 412, cost: 500, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "Gulshan Restaurant", rating: 1.7, img: "./res2.jpeg" },
            { id: 4, votes: 610, reviews: 376, cost: 300, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "XYZ Restaurant", rating: 2.0, img: "./res3.jpeg" },
            { id: 5, votes: 510, reviews: 250, cost: 200, category: "Continental, Pizza, Desserts", payment: "Only cards accepted", title: "Bright Restaurant", rating: 4.1, img: "./res4.jpeg" },
            { id: 6, votes: 766, reviews: 561, cost: 1000, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "Aditya Restaurant", rating: 0.5, img: "./res5.jpeg" },
            { id: 7, votes: 352, reviews: 524, cost: 750, category: "Continental, Pizza, Asian, Desserts", payment: "Only cards accepted", title: "Radhika Restaurant", rating: 0.9, img: "./res6.jpg" },
            { id: 8, votes: 465, reviews: 536, cost: 450, category: "Continental, Pizza, Asian, Desserts, Chinese", payment: "Only Online Payment Accepted", title: "Ganesh Restaurant", rating: 2.4, img: "./res7.jpeg" },
            { id: 9, votes: 477, reviews: 417, cost: 550, category: "Continental, Asian, Desserts", payment: "Only cards accepted", title: "Green Park Restaurant", rating: 2.8, img: "./res8.jpeg" },
            { id: 10, votes: 477, reviews: 417, cost: 550, category: "Continental, Asian, Desserts", payment: "Only cards accepted", title: "Green Park Restaurant", rating: 3.8, img: "./res9.jpg" }
            ]
        }
    }

    fourStar = () => {
        this.setState(() =>
            this.state.filteredArray = this.state.details.filter((i) => i.rating >= 4)
        )
    }

    threeStar = () => {
        this.setState(() =>
            this.state.filteredArray = this.state.details.filter((i) => i.rating >= 3)
        )
    }

    twoStar = () => {
        this.setState(() =>
            this.state.filteredArray = this.state.details.filter((i) => i.rating >= 2)
        )
    }

    singleStar = () => {
        this.setState(() =>
            this.state.filteredArray = this.state.details.filter((i) => i.rating >= 1)
        )
    }
    sortRestau = () => {
        this.setState(() =>
            this.state.filteredArray = this.state.details.sort((a, b) => (b.rating - a.rating))

        )
    }


    render() {
        return (
            <div>
                <button onClick={this.fourStar}>4 STAR</button>
                <button onClick={this.threeStar}>3 STAR</button>
                <button onClick={this.twoStar}>2 STAR</button>
                <button onClick={this.singleStar}>1 STAR</button>
                <button onClick={this.sortRestau}>Sort</button>
                <div>{this.state.filteredArray.map((item) => <ReastaurantDetails key={item.id} obj={item} />)}</div>
            </div>
        );
    }
}

export default App