import React from "react";
import Pic from "../../assets/pexels-fotoaibe-1643384.jpg";

function Process() {
  return (
    <div>
      <section class="workflow" id="workflow">
        <div
          className="header-one"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h1>Work Flow</h1>
        </div>
        <div class="container">
          <div class="row py-4">
            <div class="col-lg-6 mb-2 text-center text-lg-start  ">
              <div
                class="abo "
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img className="img-fluid" src={Pic} alt="pic" />
              </div>
            </div>
            <div class="col-lg-6 px-5">
              <div
                class="abo "
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div class="row">
                  <div class="col-lg-12 col-md-6 ">
                    <div class="inner-box">
                      <h4 class="">We Provide the Best Process Exprience </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-3 mt-3 col-md-3">
                      <div class="inner-box">
                        <iconify-icon
                          inline
                          icon="mdi:clipboard-text"
                          style={{ fontSize: "30px", marginRight: "15px" }}
                        ></iconify-icon>
                      </div>
                    </div>
                    <div class="col-lg-9 mt-3  col-md-9">
                      <div class="inner-box">
                        <h5>Briefing</h5>
                        <p class="">
                          First, we discuss the concept and make sure you
                          understand your vision and how you want your space to
                          feel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-3 mt-3 col-md-3">
                      <div class="inner-box">
                        <iconify-icon
                          inline
                          icon="mdi:settings"
                          style={{ fontSize: "30px", marginRight: "15px" }}
                        ></iconify-icon>
                      </div>
                    </div>
                    <div class="col-lg-9 mt-3  col-md-9">
                      <div class="inner-box">
                        <h5>Processing</h5>
                        <p class="">
                          Once the briefing is complete, we start working on
                          designs and materials to bring your vision to life.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-3 mt-3 col-md-3">
                      <div class="inner-box">
                        <iconify-icon
                          inline
                          icon="mdi:check-circle"
                          style={{ fontSize: "30px", marginRight: "15px" }}
                        ></iconify-icon>
                      </div>
                    </div>
                    <div class="col-lg-9 mt-3  col-md-9">
                      <div class="inner-box">
                        <h5>Finishing</h5>
                        <p class="">
                          After everything is complete, we ensure the final
                          touches are perfect and your space is ready to enjoy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
