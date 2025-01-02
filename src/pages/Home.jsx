import CollapsibleExample from "../components/Navbar/Navbar";
// import Carousel from "../components/Carousel/Carousel";
import Projects from "../components/Projects/Projects";
import WorkExprience from "../components/WorkExprience/WorkExprience";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../components/Features/Features";
import Process from "../components/Process/Process";
import Designs from "../components/Interior-Designs/Designs";

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
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div id="nav">
        <CollapsibleExample />
      </div>
      <div className="banner">
        <div class="container">
          <div class="row py-5">
            <div
              class="col-xl-6  py-5 mb-5 text-center text-lg-start  "
              data-aos="zoom-out"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="py-3">Fine Finish Interior Design For Your Family</h1>
              <h2 class="pb-3">
                At <span className="text-danger">Fine Finish Interior</span>, we
                create spaces that combine beauty, functionality, and comfort,
                tailored to reflect your style and needs.
              </h2>
              <h2>Contact Us</h2>
              <h2>
                <span>phone :</span>+91 8015439155
              </h2>
              <h2>
                <span>Email :</span>subashnss7@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Features />
      {/* <Carousel /> */}
      <Process />
      <Projects />
      <Designs />
      <WorkExprience />
      <section class="box py-5">
        <div class="container">
          <div class="row gy-3 ">
            <div class="col-lg-4  col-md-6">
              <div
                class="box-1 p-4 mt-5"
                data-aos="flip-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <h1>232</h1>
                <p>Happy Clients</p>
                <div class="icons">
                  <iconify-icon icon="bi:emoji-smile"></iconify-icon>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-aos="flip-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div class="box-1 p-4 mt-5">
                <h1>521</h1>
                <p>Projects</p>
                <div class="icons">
                  <iconify-icon icon="bi:journal-richtext"></iconify-icon>
                </div>
              </div>
            </div>
            {/* <div
              class="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div class="box-1 p-4 mt-5">
                <h1>1463</h1>
                <p>Hours Of Support</p>
                <div class="icons">
                  <iconify-icon icon="bi:headset"></iconify-icon>
                </div>
              </div>
            </div> */}
            <div
              class="col-lg-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-once="true"
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
                      3.1.88 Bharathi Nagar,
                      <br />
                      Sambavarvadakarai 627-856,
                      <br />
                      Tenkasi
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
                  <p>+91 8760636247</p>
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
                  <p>subashnss7@gmail.com</p>
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
