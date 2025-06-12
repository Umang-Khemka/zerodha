import React from "react";

function Hero() {
  return (
    <section className="container-fluid page-content" id="supportHero">
      <div className="py-4 mb-5" id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a href="" className="text-decoration-underline">Track tickets</a>
      </div>
      <div className="row" style={{margin: '0 150px', paddingBottom: '50px'}}>
        <div className="col-6 pe-5">
          <h4 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <div className="position-relative mb-4">
            <input 
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <i className="position-absolute top-50 end-0 translate-middle-y me-3" style={{fontSize: '20px', color: '#666'}}>🔍</i>
          </div>
          <div className="d-flex flex-wrap gap-4 mb-3">
            <a href="" className="text-decoration-underline">Track account opening</a>
            <a href="" className="text-decoration-underline">Track segment activation</a>
            <a href="" className="text-decoration-underline">Intraday margins</a>
          </div>
          <div>
            <a href="" className="text-decoration-underline">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 ps-5">
          <h4 className="mb-4">Featured</h4>
          <div className="mb-3">
            <span className="me-2">1.</span>
            <a href="" className="text-decoration-underline">Surveillance measure on scrips - June 2025</a>
          </div>
          <div>
            <span className="me-2">2.</span>
            <a href="" className="text-decoration-underline">Offer for sale (OFS) - June 2025</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;