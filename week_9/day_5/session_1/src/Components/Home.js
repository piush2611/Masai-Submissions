import React from 'react'

const data = [
    {src:"https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-business_3x2-small.jpg?804", title:"Business solutions for iPad & iPhone", text:" Our flagship range of powered business solutions keeps your iPad securely mounted and charged at al times.", btn:"Shop Business"},
    {src:"https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-ipad_3x2-small.jpg?804", title:"iPad cases & mount", text:"Expand the functionality of your iPad in every walk of life by connecting to a range of stands and mounts.", btn:"Shop iPad"},
    {src:"https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-power_3x2-small.jpg?804", title:"Wireless Charging", text:"Our first ever wireless charger, featuring a tempered glass surface and an anodised aluminium base.", btn:"Shop power UNO"}
]
export default function Home() {
    return (
        <div>
            <div className="text-center p-4 bg-light">
            <div className="display-4 text-warning">Friday sale</div>
            <div className="display-3 text-danger">50% OFF on all products</div>
        </div>
            <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/190718_AirPods_Charger_01_2048x.jpg?v=1563432361" className="img-fluid mb-4" alt="landingImage"/>
            <div className="row">
                {data.map(e => 
                        <div className="col-12 col-md-6 col-lg-4" key={e.title}>
                            <img src={e.src} alt="" className="img-fluid"/>
                            <p className="text-dark font-weight-bolder">{e.title}</p>
                            <p className="text-muted my-1">{e.text}</p>
                            <button className="btn btn-block btn-info">{e.btn}</button>
                        </div>
                    )}
            </div>
            <div className="row my-4">
                <div className="col-12 cil-md-6 col-lg-8">
                    <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Business-Banner-Wide_800x.jpg?v=1532312056" alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-5">
                    <h3>Proper for business</h3>
                    <p className="text-muted">Use your iPad as a powerful business tool — Mounts and stands designed to promote engagement and simplify customer interaction in Retail, Hospitality, and Enterprise environments alike.</p>
                    <button className="btn btn-info">Shop Business</button>
                </div>
            </div>
        </div>
    )
}
