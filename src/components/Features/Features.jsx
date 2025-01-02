import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Features() {
  return (
    <section className="features-section" id="features">
      <div
        className="header-one"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <h1>Our Features</h1>
      </div>
      <Container>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="house-card text-center">
                <div className="house-icon">
                  <iconify-icon inline icon="mdi:tools"></iconify-icon>
                </div>
                <div className="house-content">
                  <h5 className="fw-bold">Quality Materials</h5>
                  <p>We have all the Quality Interior Products needed.</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="house-card text-center">
                <div className="house-icon">
                  <iconify-icon inline icon="mdi:helmet"></iconify-icon>
                </div>
                <div className="house-content">
                  <h5 className="fw-bold">Expert Engineer</h5>
                  <p>
                    Our Interior Team Members are Well Educated and
                    Professional.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="house-card text-center">
                <div className="house-icon">
                  <iconify-icon inline icon="mdi:wrench"></iconify-icon>
                </div>
                <div className="house-content">
                  <h5 className="fw-bold">Quality Maintenance</h5>
                  <p>Ensure the Quality of work is our main goal to follow.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
