import React from "react";
import Portfolio1 from "../../assets/portfolio/portfolio-1.jpeg";
import Portfolio2 from "../../assets/portfolio/portfolio-2.jpeg";
import Portfolio3 from "../../assets/portfolio/portfolio-3.jpeg";
import Portfolio4 from "../../assets/portfolio/portfolio-4.jpeg";
import Portfolio5 from "../../assets/portfolio/portfolio-5.jpeg";
import Portfolio6 from "../../assets/portfolio/portfolio-6.jpeg";
import Portfolio7 from "../../assets/portfolio/portfolio-7.jpeg";
import Portfolio8 from "../../assets/portfolio/portfolio-8.jpeg";
import Portfolio9 from "../../assets/portfolio/portfolio-9.jpeg";

function Designs() {
  const images = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
    Portfolio8,
    Portfolio9,
  ];

  return (
    <div>
      <section className="Designs py-5" id="designs">
        <div className="container">
          <div
            className="header-one"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h1>Designs</h1>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-duration="1500">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 mt-4 col-md-6">
                <div className="port">
                  <img
                    src={image}
                    alt={`Portfolio${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Designs;
