import React from "react";

const Category = ({ icon, title, links }) => {
  return (
    <div className="col-lg-4 col-md-6 p-4">
      <section>
        <h5 className="mb-3">
          <i className={`me-2 ${icon}`} aria-hidden="true"></i>
          {title}
        </h5>
        <nav aria-label={`${title} links`}>
          {links.map((linkText, index) => (
            <a
              key={index}
              href="#"
              className="d-block mb-1 text-decoration-none text-dark"
              style={{ lineHeight: "1.8" }}
            >
              {linkText}
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
};

function CreateTicket() {
  const data = [
    {
      title: "Account Opening",
      icon: "fa fa-plus-circle",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-solid fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-solid fa-chart-line",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-solid fa-credit-card",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-solid fa-database",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-solid fa-coins",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="fs-4 text-muted mb-4">
          To create a ticket, select a relevant topic
        </h2>
        {data.map((section, idx) => (
          <Category key={idx} {...section} />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
