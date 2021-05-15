import React, { Component } from 'react'

const arr = [{id : 1, title : "About us"}, {id:2, title:"Newsroom"}, {id:3,title:"Investor relations"}, {id:4, title:"Global citizenship"}, {id:5, title:"Safety"}, {id:6, title:"Blog"}, {id:7, title:"Careers"}]
const arr2 = [{id:8, title:"Products"}, {id:9, title:"Drive"}, {id:10, title:"Exit"}, {id:11, title:"Business"}, {id:12, title:"Freight"}, {id:13, title:"Health"}, {id:"14", title:"Uber Air"}, {id:15, title:"Uber Works"}, {id:16, title:"Advanced Technologies Group"}] 



export class Footer extends Component {
    render() {
        return (
            <div className="bg-dark text-white">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-6">
                            <h1>Uber</h1>
                            <p> ? help Center</p>
                            <p>English(International</p>
                            <p>Bangalore</p>
                        </div>
                        <div className="col-3">
                                {arr.map(e => <p key={e.id}>{e.title}</p>)}
                        </div>
                        <div className="col-3">
                                {arr2.map(e => <p key={e.id}>{e.title}</p>)}
                        </div>
                    </div>
                    <hr className="bg-white"/>
                    <div className="d-flex justify-content-around">
                        <p>© 2019 Uber Technologies Inc.</p>
                        <p>Privacy</p>
                        <p>Acessibility</p>
                        <p>terms</p>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
