import CollapsibleExample from "../components/Navbar/Navbar";
// import Carousel from "../components/Carousel/Carousel";
// import Projects from "../components/Projects/Projects";
// import WorkExprience from "../components/WorkExprience/WorkExprience";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../components/Features/Features";
import Process from "../components/Process/Process";
import Designs from "../components/Interior-Designs/Designs";
import CNCLaser from "../components/Cnc-Laser/cnc-laser";

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowArrow(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="scroll-progress "
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div id="nav" className=" w-100 overflow-hidden">
        <CollapsibleExample />
      </div>
      <div className="banner">
        <div class="container py-5">
          <div class="row ">
            <div
              class="col-xl-6  py-5 mb-5 text-center text-lg-start  "
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="py-3">Fine Finish Interior & Exterior Design For Your Family</h1>
              <h2 class="pb-3">
                At <span className="text-danger">Fine Finish Interior & Exterior</span>, we
                create spaces that combine beauty, functionality, and comfort,
                tailored to reflect your style and needs.
              </h2>
              <h2>Contact Us</h2>
              <h2>
                <span>phone :</span>+91 99620 45315, +91 80154 39155
              </h2>
              <h2>
                <span>Email :</span>finefinishinterior@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Features />
      {/* <Carousel /> */}
      <Process />
      {/* <Projects /> */}
      <Designs />
      <CNCLaser />
      {/* <WorkExprience /> */}
      <section class="box py-5">
        <div class="container">
          <div class="row gy-3">
            <div class="col-lg-4  col-md-6">
              <div
                class="box-1 p-4 mt-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>60</h1>
                <p>Happy Clients</p>
                <div class="icons">
                  <iconify-icon icon="bi:emoji-smile"></iconify-icon>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div class="box-1 p-4 mt-5">
                <h1>50</h1>
                <p>Projects</p>
                <div class="icons">
                  <iconify-icon icon="bi:journal-richtext"></iconify-icon>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div class="box-1 p-4 mt-5">
                <h1>15</h1>
                <p>Hard Workers</p>
                <div class="icons">
                  <iconify-icon icon="bi:people"></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact py-5" id="contact">
        <div className="container">
          <div
            className="header-sec"
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h1 style={{ color: "#000" }}>CONTACT</h1>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="col-lg-12 col-md-12">
                <div
                  className="cont"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="contact-1">
                    <span>
                      <iconify-icon icon="bx:map"></iconify-icon>
                    </span>
                  </div>
                  <div className="contact-2">
                    <h1>Our Address</h1>
                    <p>
                      79-A, Siva Prakasam Nager,
                      <br />
                      40 Feet Road, Redlilis,
                      <br />
                      Ambattur, Chennai - 600053.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-lg-6 col-md-6 style">
              <div
                className="cont m-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="contact-1">
                  <span>
                    <iconify-icon icon="bx:phone-call"></iconify-icon>
                  </span>
                </div>
                <div className="contact-2">
                  <h1>Call Us</h1>
                  <p>+91 99620 45315, +91 80154 39155</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="cont m-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="contact-1">
                  <span>
                    <iconify-icon icon="bx:envelope"></iconify-icon>
                  </span>
                </div>
                <div className="contact-2">
                  <h1>Email Us</h1>
                  <p>finefinishinterior@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {showArrow && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <iconify-icon icon="bi:arrow-up"></iconify-icon>
        </button>
      )}
    </>
  );
}

export default Home;
