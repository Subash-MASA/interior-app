import React, { useState, useEffect } from "react";
import Finefinish from "../../assets/Interiar/interior-logo.png";

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (tabName) => {
    setIsOpen(false);
    setActiveTab(tabName);
  };

  const handleScroll = () => {
    const sections = ["Home", "Features", "Work Flow", "Designs", "Contact"];
    const offset = 200; // Adjust this value if needed
    const scrollPosition = window.scrollY + offset;

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i].toLowerCase().replace(" ", ""));
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveTab(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="logo-img">
        <img
          src={Finefinish}
          alt="Fine Finish"
          className="d-none d-md-none d-lg-block me-2"
        />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-lg-none">
          <img
          src={Finefinish}
          alt="Fine Finish"
          className="interior-fine"
        />
          </div>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""
              } justify-content-end order-lg-1`}
            id="navbarNav"
          >
            <ul className="navbar-nav menu bg-white" id="now">
              <li className="nav-item">
                <a
                  className={`nav-link px-2 ${activeTab === "Home" ? "active" : ""}`}
                  onClick={() => handleNavItemClick("Home")}
                  href="#nav"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-2 ${activeTab === "Features" ? "active" : ""}`}
                  onClick={() => handleNavItemClick("Features")}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-2 ${activeTab === "Work Flow" ? "active" : ""}`}
                  onClick={() => handleNavItemClick("Work Flow")}
                  href="#workflow"
                >
                  Work Flow
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-2 ${activeTab === "Designs" ? "active" : ""}`}
                  onClick={() => handleNavItemClick("Designs")}
                  href="#designs"
                >
                  Designs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-2 ${activeTab === "Contact" ? "active" : ""}`}
                  onClick={() => handleNavItemClick("Contact")}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-logo" href="#nav">
                  <img src={Logo} alt="navlogo" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CollapsibleExample;
