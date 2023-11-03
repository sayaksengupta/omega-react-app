import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container callfooter">
          {/* <i class="fa fa-phone" aria-hidden="true"></i> 98700 12000
          <i class="fa fa-envelope" aria-hidden="true"></i> 98700 12000 */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="assets/img/logofooter.png"
                className="img-fluid mb-3"
                alt="..."
                width="100px"
              />
              <p className="mb-2">
                Phone number:{" "}
                <a href="#" className="phone">
                  304-609-6072
                </a>
              </p>
              <p>
                Street: 235 Hall Valley Drive, City: Buttonwillow, Country
                United States
              </p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="articles.html">Articles</a>
                </li>
                <li>
                  <a href="careers.html">Careers</a>
                </li>
                <li>
                  <a href="contact_us.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Get to know us</h5>
              <ul>
                <li>
                  <a href="terms.html">T&amp;C</a>
                </li>
                <li>
                  <a href="disclaimer.html">Disclaimer</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <form action className="newsletter">
                <h5>Subscribe to our Newsletter!</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="fields">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <button className="portfolio-link">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container bootom-nav text-center">
          <div className="social">
            <a href>
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href>
              <i className="fa-brands fa-instagram" />
            </a>
            <a href>
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <div className="payments">
            <img src="images/payments.png" alt="" height={30} />
          </div>
        </div>
        <div className="container-fluid copyfooter text-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={18}
              viewBox="0 -960 960 960"
              width={18}
            >
              <path d="M393-320h173q14 0 20.5-9.5T593-353v-73h-60v46H426v-200h107v47h60v-73q0-14-6.5-24T566-640H393q-14 0-20.5 10t-6.5 24v253q0 14 6.5 23.5T393-320Zm87 240q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
            </svg>{" "}
            2023 Omega. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
