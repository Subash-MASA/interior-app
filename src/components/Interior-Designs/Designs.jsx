import React, { useState } from "react";
import Portfolio1 from "../../assets/Interiar/Interior1.jpg";
import Portfolio2 from "../../assets/Interiar/Interior2.jpg";
import Portfolio3 from "../../assets/Interiar/Interior3.jpg";
import Portfolio4 from "../../assets/Interiar/Interior4.jpg";
import Portfolio5 from "../../assets/Interiar/Interior5.jpg";
import Portfolio6 from "../../assets/Interiar/Interior6.jpg";
import Portfolio7 from "../../assets/Interiar/Interior7.jpg";
import Portfolio8 from "../../assets/Interiar/Interior8.jpg";
import Portfolio9 from "../../assets/Interiar/Interior9.jpg";
import Interior10 from "../../assets/Interiar/Interior10.jpg";
import Interior11 from "../../assets/Interiar/Interior11.jpg";
import Interior12 from "../../assets/Interiar/Interior12.jpg";
import Interior13 from "../../assets/Interiar/Interior13.jpg";
import Interior14 from "../../assets/Interiar/Interior14.jpg";
import Interior15 from "../../assets/Interiar/Interior15.jpg";
import Interior16 from "../../assets/Interiar/Interior16.jpg";
import Interior17 from "../../assets/Interiar/Interior17.jpg";
import Interior18 from "../../assets/Interiar/Interior18.jpg";
import Interior19 from "../../assets/Interiar/Interior19.jpg";
import Interior20 from "../../assets/Interiar/Interior20.jpg";
import Shop from "../../assets/Interiar/Interior-shop1.jpg";
import Shop2 from "../../assets/Interiar/Interior-shop2.webp";
import Shop3 from "../../assets/Interiar/Interior-shop3.webp";
import Shop4 from "../../assets/Interiar/Interior-shop4.jpg";

function Designs() {
  const images = [
    Portfolio1,
    Shop,
    Portfolio2,
    Shop2,
    Portfolio3,
    Shop3,
    Portfolio4,
    Shop4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
    Portfolio8,
    Portfolio9,
    Interior10,
    Interior11,
    Interior12,
    Interior13,
    Interior14,
    Interior15,
    Interior16,
    Interior17,
    Interior18,
    Interior19,
    Interior20,
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

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
            {images.slice(0, visibleCount).map((image, index) => (
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
          {visibleCount < images.length && (
            <div className="text-center mt-4">
              <button
                className="see-more"
                onClick={handleSeeMore}
              >
                See More...
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Designs;
