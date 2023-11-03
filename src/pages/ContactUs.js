import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
      <section className="contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-us-image">
                <img
                  src="assets/img/logomain.png"
                  alt=""
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <div className="col-lg-8" style={{ paddingLeft: "30px" }}>
              <h6>
                Aperiam quod dolores laudantium exercitationem nihil laboriosams
              </h6>
              <p>
                Aperiam quod dolores laudantium exercitationem nihil laboriosam
                odio ducimus voluptate corrupti molestias quis eligendi quam
                cumque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-body">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <a href="contact-us2.html">
                <div className="contact-box">
                  <div className="contact_icon">
                    <div className="contact-mid-icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="con-box">
                    <div className="con-text">
                      <h6>Voluptates aliquam</h6>
                      <p>Voluptates aliquam voluptas, nesciunt deserunt.</p>
                    </div>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="contact-us2.html">
                <div className="contact-box">
                  <div className="contact_icon">
                    <div className="contact-mid-icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="con-box">
                    <div className="con-text">
                      <h6>Voluptates aliquam</h6>
                      <p>Voluptates aliquam voluptas, nesciunt deserunt.</p>
                    </div>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="contact-us2.html">
                <div className="contact-box">
                  <div className="contact_icon">
                    <div className="contact-mid-icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="con-box">
                    <div className="con-text">
                      <h6>Voluptates aliquam</h6>
                      <p>Voluptates aliquam voluptas, nesciunt deserunt.</p>
                    </div>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
