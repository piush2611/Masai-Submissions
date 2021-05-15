import React from 'react'

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banner/35062019181700035_179.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00015430.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00010731.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
