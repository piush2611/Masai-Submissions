import React from 'react'


const data = [
    {src:"https://cdn.shopify.com/s/files/1/0173/8828/files/Team-Proper-Alon_grande_baef5ad9-8328-41ed-ac7a-18669f4146f9_600x600.png?v=1575425648", name:"Alon Tamir", position:"Founder & CEO"},
    {src:"https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-James_grande.jpg?v=1522803885", name:"James Kennedy", position:"Desgin & Director"},
    {src:"https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Aidan_grande.jpg?v=1522803770", name:"Aldoh Pattinson", position:"Industrial Desginer"},
    {src:"https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Matt_grande.jpg?v=1522803916", name:"Matt Jones", position:"Graphic Designer"},
    {src:"https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Sihan_grande.jpg?v=1522803938", name:"Sihan Zhao", position:"Supply chain manager"},
    {src:"https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Bill_grande.jpg?v=1522803869", name:"Bill Mastre", position:"BDCA"}
]
export default function About() {
    return (
        <div className="container">
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/about-us-banner_910a11c0-aac8-4d48-994b-a08cc4f96e9f_2048x.jpg?v=1552007128" className="card-img" alt=""/>
                <div className="card-img-overlay">
                    <h4 className="font-weight-bold text-dark card-title">Our Mission</h4>
                    <div className="card-text">Proper technology experiences</div>
                </div>
            </div>
            <div className="text-center p-5 ">
                <h2 className="my-2 font-weight-bold">Designed to do more</h2>
                <h5>Studio Proper is a boutique product design studio based in Melbourne, Australia, focused on simplifying everyday interactions with technology in a beautiful and minimal fashion.</h5>
                <h5>Founded on the principal that good design should be seamless; we designed a range of mounts, stands, and accessories that fit cohesively in every use case with Apple devices.</h5>
                <h5>Studio Proper currently offers mounting solutions for the iPhone, iPad, and Apple Watch; featuring desk stands, travel accessories, wall mounts, and more. As well as a range of specialised Business Solutions designed to simplify point of sale experiences and create seamless customer interactions in retail, hospitality, and large enterprise.</h5>
            </div>
            <h2 className="text-center my-3 font-weight-bolder">Our team</h2>
                <div className="row my-2 pb-5">
                    {data.map(e => 
                        <div className="col-12 col-md-6 col-lg-4" key={e.position}>
                            <img src={e.src} alt="" className="img-fluid"/>
                            <p className="text-dark">{e.name}</p>
                            <p>{e.position}</p>
                        </div>
                    )}
                </div>
        </div>
    )
}

