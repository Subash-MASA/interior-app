import React from "react";
import Pss from "../../assets/projects-image/pss-fa.JPG";
import Admission from "../../assets/projects-image/admission.JPG";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div
            className="header-one"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h1>Projects</h1>
          </div>
          <ul className="nav nav-tabs abt-cont mt-4" id="myTab" role="tablist">
            <li
              className="nav-item col-6 col-md-6 col-xs-4"
              role="presentation"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <a
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <iconify-icon icon="mdi:donation"></iconify-icon>
                <span className="d-none d-md-none d-lg-block">
                  PSS - FA Module
                </span>
              </a>
            </li>
            <li
              className="nav-item col-6 col-md-6 col-xs-4"
              role="presentation"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <a
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <iconify-icon icon="arcticons:admission-assistant"></iconify-icon>
                <span className="d-none d-md-none d-lg-block">
                  PWDS - Admission Module
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="tab-content"
          id="myTabContent"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div
            className="tab-pane fade show active abt-content"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row my-4">
              <div className="col-lg-6 order-2 order-sm-2 order-lg-1">
                <h4>Role: Front-End Developer</h4>
                <p className="first">
                  <span style={{ fontWeight: "bold" }}>
                    Technologies Used :{" "}
                  </span>
                  React TSX, react-bootstrap, recoil, react-hook-form,
                  react-router, react-query, yup validation, Visual Studio Code
                </p>
                <ul className="p-0">
                  <li>
                    <iconify-icon icon="ri:check-double-line"></iconify-icon>
                    Developed and maintained a Field Ambassador using React TSX
                    as the primary front-end framework.
                  </li>
                  <li>
                    <iconify-icon icon="ri:check-double-line"></iconify-icon>
                    Built and integrated Dashboard page and Target details based
                    on the role.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-sm-1 order-lg-2">
                <img
                  src={Pss}
                  alt="pss"
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade abt-content"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row my-4">
              <div className="col-lg-6 order-2 col-lg-1">
                <h4>Role: Front-End Developer</h4>
                <p className="first">
                  <span style={{ fontWeight: "bold" }}>
                    Technologies Used :{" "}
                  </span>{" "}
                  React TSX, react-bootstrap, react-hook-form, react-router,
                  react-query, react-lazy, Visual Studio, Visual Studio Code.
                </p>
                <ul className="p-0">
                  <li>
                    <iconify-icon icon="ri:check-double-line"></iconify-icon>
                    Developed and maintained the Admission Module using React
                    TSX as the primary front-end framework.
                  </li>
                  <li>
                    <iconify-icon icon="ri:check-double-line"></iconify-icon>
                    Worked on UG, PG, and PhD application forms for the
                    admission process, ensuring a smooth and accessible user
                    interface for applicants.
                  </li>
                  <li>
                    <iconify-icon icon="ri:check-double-line"></iconify-icon>
                    Collaborated closely with backend teams to ensure proper
                    handling of API integrations.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-sm-1 order-lg-2">
                <img
                  src={Admission}
                  alt="admission"
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
