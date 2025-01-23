import React from "react";

function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-la-1">
              <h1>K. BHARATH RAJ</h1>
                    <h1>S. DINESH BABU</h1>
                    <p>
                      79-A, Siva Prakasam Nager,
                      <br />
                      40 Feet Road, Redlilis, 
                      <br />
                      Ambattur, Chennai - 600053.
                    </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-la">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#nav">Home</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#workflow">Work Flow</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#designs">Designs</a>
                  </li>
                  {/* <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#projects">Projects</a>
                  </li> */}
                  {/* <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#workexp">Work Exprience</a>
                  </li> */}
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#contact">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-end text-center">
        <div class="container">
          <div class="row  justify-content-between align-items-center">
            <div class="col-lg-8 col-md-6">
              <div class="footer-mail text-lg-start d-flex align-items-md-start ">
                <p>
                  2025 Designed by<a href="#nav"> ...</a>
                </p>
              </div>
            </div>
            {/* <div class="col-lg-4 col-md-6">
              <div class="footer-logo text-lg-end text-md-end">
                <a href="#">
                  <iconify-icon icon="bxl:twitter"></iconify-icon>
                </a>
                <a href="#">
                  <iconify-icon icon="gg:facebook"></iconify-icon>
                </a>
                <a href="#">
                  <iconify-icon icon="carbon:logo-instagram"></iconify-icon>
                </a>
                <a href="#">
                  <iconify-icon icon="bxl:skype"></iconify-icon>
                </a>
                <a href="#">
                  <iconify-icon icon="bxl:linkedin"></iconify-icon>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
