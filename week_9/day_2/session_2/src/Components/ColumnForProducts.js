import React from 'react'

export default function ColumnForProducts(props) {
    if(props.reverse){
        return (
            <div className="row p-5">
                <div className="col-12 col-md-6">
                    <h1 className="py-3">{props.title}</h1>
                    <p>{props.content}</p>
                    <p className="py-2 text-info">Learn more -></p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={props.src} alt="" className="img-fluid"/>
                </div> 
            </div>
        )
    }
    else {
        return (
            <div className="row p-5">
                <div className="col-12 col-md-6">
                    <img src={props.src} alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="py-3">{props.title}</h1>
                    <p>{props.content}</p>
                    <p className="py-2 text-info">Learn more -></p>
                </div>
            </div>
        )
    }
    
}
