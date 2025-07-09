import React from "react";

function Hero() {
  return (
    <div className="container page-content">
      {/* Title Section */}
      <div className="row py-5 mt-5 border-bottom text-center">
        <div className="col">
          <h1 className="mb-3">Charges</h1>
          <h3 className="text-muted fs-5">List of all charges and taxes</h3>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row py-5 mt-4 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free equity delivery" className="img-fluid mb-3" />
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday and F&O" className="img-fluid mb-3" />
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free direct MF" className="img-fluid mb-3" />
          <h2 className="fs-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
