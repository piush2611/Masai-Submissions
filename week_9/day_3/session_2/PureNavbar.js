import React from 'react'

export default function PureNavbar({brand, navItem1, navItem2, navItem3, navItem4}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a href="" className="navbar-brand">{brand}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">{navItem1}</li>
                    <li className="nav-item active">{navItem2}</li>
                    <li className="nav-item active">{navItem3}</li>
                    <li className="nav-item active">{navItem4}</li>
                </ul>
            </div>
        </nav>
    )
}
