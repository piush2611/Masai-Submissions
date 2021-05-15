import React from 'react'
import './card.css'

class Card extends React.Component{
    render() {
        return(
            <div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                    <h3>Ricky Park</h3>
                    <p>NEW YORK</p>
                    <h5>User interface designer and <br/> front-end developer</h5>
                    <div className="btn">
                        <button className="btn1">Message</button>
                        <button className="btn2">Following</button>
                    </div>
                    <div className="cardFooter">
                        <p>SKILLS</p>
                        <div className="flex">
                            <button>UI/ UX</button>
                            <button>Front End Development</button>
                            <button>HTML</button>
                        </div>
                        <div className="flex">
                            <button>CSS</button>
                            <button>JavaScript</button>
                            <button>React</button>
                            <button>Node</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card