import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "60%" }} alt="logo" />
            <p>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved
            </p>
          </div>
          <div className="col">
            <p className="fw-medium">Company</p>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">About</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Products</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Pricing</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Referral programme</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Careers</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Zerodha.Tech</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Press & media</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Zerodha cares (CSR)</a></div>
          </div>
          <div className="col">
            <p className="fw-medium">Support</p>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Contact</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Support portal</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Z-connect blog</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">List of charges</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Downloads & resources</a></div>
          </div>
          <div className="col">
            <p className="fw-medium">Account</p>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Open an account</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">Fund transfer</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none text-secondary">60 day challenge</a></div>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;