import React from 'react'
import PricingCard from './PricingCard'

export default function Pricing() {
    return (
        <div>
            <div className="p-5 text-center mb-5">
                <h1>Pricing</h1>
                <h4>Free equity investments and flat ₹20 intraday and F&O trades</h4>
            </div>
            <hr className="text-muted pt-5"/>
            <div className="row text-center">
                <PricingCard src="https://zerodha.com/static/images/pricing-eq.svg" title="Free Equity Delivery" content="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. " />
                <PricingCard src="https://zerodha.com/static/images/other-trades.svg" title="Intraday & F&O Trades" content=" Flat ₹ 20 or 0.01% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. " />
                <PricingCard src="https://zerodha.com/static/images/pricing-eq.svg" title="Free Direct MF" content="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. " />
                
            </div>
        </div>
    )
}
