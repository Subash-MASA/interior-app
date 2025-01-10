import React, { useState } from "react";
import Finefinish from "../../assets/Interiar/interior-logo.png";

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="logo-img">
        <img
          src={Finefinish}
          alt="Fine Finish"
          className="d-none d-md-none d-lg-block me-2"
        />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
        <div class="container">
          <button class="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            } justify-content-end order-lg-1`}
            id="navbarNav"
          >
            <ul class="navbar-nav menu bg-white" id="now">
              <li class="nav-item">
                <a class="nav-link active px-2" onClick={handleNavItemClick} href="#nav">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2" onClick={handleNavItemClick} href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2" href="#workflow" onClick={handleNavItemClick}>
                  Work Flow
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link px-2" href="#projects" onclick="change()">
                  Projects
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link px-2" href="#designs" onClick={handleNavItemClick}>
                  Designs
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link px-2" href="#workexp" onclick="change()">
                  Work Exprience
                </a>
              </li> */}
              <li class="nav-item">
                <a
                  class="nav-link px-2 pe-4"
                  href="#contact"
                  onClick={handleNavItemClick}
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
