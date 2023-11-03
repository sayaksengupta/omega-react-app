import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section
        className="banner"
        style={{ background: 'url("/assets/img/banner.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <h5>About Us</h5>
                <h6>
                  There are many variations of passages of Lorem available.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about1">
        <div className="container">
          <div className="about-top">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <h5>About Us</h5>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6 pb-4">
                    <div className="about_icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <p>
                      Exercitationem quas molestiae consequatur illo repellat
                      eligendi illum quis deserunt sit modi rerum facilis vero
                      voluptatum alias incidunt natus!
                    </p>
                  </div>
                  <div className="col-lg-6 pb-4">
                    <div className="about_icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <p>
                      Exercitationem quas molestiae consequatur illo repellat
                      eligendi illum quis deserunt sit modi rerum facilis vero
                      voluptatum alias incidunt natus!
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="about_icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <p>
                      Exercitationem quas molestiae consequatur illo repellat
                      eligendi illum quis deserunt sit modi rerum facilis vero
                      voluptatum alias incidunt natus!
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="about_icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <p>
                      Exercitationem quas molestiae consequatur illo repellat
                      eligendi illum quis deserunt sit modi rerum facilis vero
                      voluptatum alias incidunt natus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-image">
                <img
                  src="assets/img/bannersmall01.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="col-lg-8" style={{ paddingLeft: "50px" }}>
              <h6>Voluptates aliquam voluptas</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aliquam voluptas, nesciunt deserunt, maiores, aperiam
                quod dolores laudantium exercitationem nihil laboriosam odio
                ducimus voluptate corrupti molestias quis eligendi quam cumque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aliquam voluptas, nesciunt deserunt, maiores, aperiam
                quod dolores laudantium exercitationem nihil laboriosam odio
                ducimus voluptate corrupti molestias quis eligendi quam cumque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="about-box">
                <div className="about_icon">
                  <div className="mid-icon">
                    <i className="fa fa-star" aria-hidden="true" />
                  </div>
                </div>
                <h6>Voluptates aliquam</h6>
                <p>
                  Voluptates aliquam voluptas, nesciunt deserunt, maiores,
                  aperiam quod dolores laudantium exercitationem nihil
                  laboriosam odio ducimus voluptate corrupti molestias quis
                  eligendi quam cumque.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-box">
                <div className="about_icon">
                  <div className="mid-icon">
                    <i className="fa fa-star" aria-hidden="true" />
                  </div>
                </div>
                <h6>Voluptates aliquam</h6>
                <p>
                  Voluptates aliquam voluptas, nesciunt deserunt, maiores,
                  aperiam quod dolores laudantium exercitationem nihil
                  laboriosam odio ducimus voluptate corrupti molestias quis
                  eligendi quam cumque.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-box">
                <div className="about_icon">
                  <div className="mid-icon">
                    <i className="fa fa-star" aria-hidden="true" />
                  </div>
                </div>
                <h6>Voluptates aliquam</h6>
                <p>
                  Voluptates aliquam voluptas, nesciunt deserunt, maiores,
                  aperiam quod dolores laudantium exercitationem nihil
                  laboriosam odio ducimus voluptate corrupti molestias quis
                  eligendi quam cumque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
