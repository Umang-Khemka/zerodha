import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }} className="pt-5 pb-3">
      <div className="container border-top pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <img
              src="media/images/logo.svg"
              className="img-fluid mb-3"
              style={{ maxWidth: "60%" }}
              alt="logo"
            />
            <p>&copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved</p>
          </div>

          <div className="col">
            <p className="fw-medium">Company</p>
            {["About", "Products", "Pricing", "Referral programme", "Careers", "Zerodha.Tech", "Press & media", "Zerodha cares (CSR)"].map((item, i) => (
              <div key={i} className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">{item}</a>
              </div>
            ))}
          </div>

          <div className="col">
            <p className="fw-medium">Support</p>
            {["Contact", "Support portal", "Z-connect blog", "List of charges", "Downloads & resources"].map((item, i) => (
              <div key={i} className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">{item}</a>
              </div>
            ))}
          </div>

          <div className="col">
            <p className="fw-medium">Account</p>
            {["Open an account", "Fund transfer", "60 day challenge"].map((item, i) => (
              <div key={i} className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">{item}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          {/* Regulatory / Compliance Information */}
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...
          </p>
          <p>
            Investments in securities market are subject to market risks; read all related documents carefully.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins only by pledge...
          </p>
          <p>
            "Prevent unauthorised transactions... If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
