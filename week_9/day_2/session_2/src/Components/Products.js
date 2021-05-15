import React from 'react'
import ColumnForProducts from './ColumnForProducts'

export default function Product() {
    return (
        <>
            <div className="p-5 text-center">
                <h1><span className="text-dark">Technology</span> - <span className="text-Muted">Investments</span></h1>
                <h4>Sleek, modern, and intuitive trading platforms </h4>
            </div>
            <hr className="text-muted p-5" />
            <ColumnForProducts src="https://zerodha.com/static/images/products-kite.png" title="Kite" content="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices " reverse={false} />
            <ColumnForProducts src="https://zerodha.com/static/images/products-console.png" title="Console" content="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." reverse={true} />
            <ColumnForProducts src="https://zerodha.com/static/images/products-coin.png" title="Coin" content="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. " reverse={false} />
            <ColumnForProducts src="https://zerodha.com/static/images/products-kiteconnect.png" title="Kite connect API" content="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. " reverse={true} />
            <ColumnForProducts src="https://zerodha.com/static/images/varsity-products.png" title="Varsity Mobile" content="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. " reverse={false} />
            <ColumnForProducts src="https://zerodha.com/static/images/sentinel-products.png" title="Sentinel" content=" Create powerful market alerts on the cloud for stocks, futures and options, and more for free. " reverse={true} />
        </>
    )
}