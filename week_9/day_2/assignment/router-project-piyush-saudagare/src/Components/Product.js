import React from 'react'

export default function Product(props) {
    console.log(props)
    const productObj = props.productArr.find(e => Number(e.id) === Number(props.match.params.id))
    if(productObj){
        return(
            <div className="row p-5">
                <img src={productObj.src} alt="productImage" className="img-thumbnail col-12 col-md-8"/>
                <div className="col-12 mt-3 col-md-4">
                    <h3 className="text-dark my-1">{productObj.name}</h3>
                    <h6 className="my-1">{productObj.price}</h6>
                    <p className="my-1">{productObj.desc}</p>
                    <button className="btn btn-outline-success">Add to cart</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }
}
