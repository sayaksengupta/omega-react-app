import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../owl.carousel/css/owl.carousel.css";
import "../owl.carousel/css/owl.theme.default.min.css";
// import "../owl.carousel/js/owl.carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";
import { Link } from "react-router-dom";

function Blog() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrow buttons
  };

  return (
    <>
      <Navbar />
      <section className="blog">
        <div className="container">
          <div
            className="blog-banner"
            style={{ background: 'url("/images/banner.jpg")' }}
          >
            <div className="row">
              <div className="col-md-12">
                <h5
                  style={{
                    position: "relative",
                    color: "#fff",
                    fontSize: "32px",
                    fontFamily: "'Bree Serif', serif",
                    fontWeight: 400,
                  }}
                >
                  Share Your Financial Insights
                </h5>

                <p>
                  Contribute your financial expertise and insights to our
                  community. Write and publish your own blogs, and let your
                  knowledge shine on our platform.
                </p>
              </div>
              <div className="col-auto" style={{zIndex: 1000}}>
                <Link to="/add-blog" className="btn blog-link" style={{cursor: "pointer", zIndex: 1000}}>
                    Write Your Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="blog-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <form className="row justify-content-center g-2">
                  <div className="col-md-3">
                    <div className="input-group">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-search"
                        type="submit"
                        style={{
                          color: "#000",
                          position: "absolute",
                          top: "0",
                          right: "14px",
                        }}
                      >
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>All Categories</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                      <option value={4}>Four</option>
                      <option value={5}>Five</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="blog-bottom-head">
                  <h5>Molestiae delectus nisi</h5>
                  <a href className="btn blog-see-link">
                    See All
                  </a>
                </div>
              </div>

              <Slider {...settings}>
                {/* Replace this with your blog items */}

                <a href="blog-details.html" className="item">
                  <div className="blog-box">
                    <img
                      src="assets/img/1cover.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="blog-text">
                      <div className="text-left">
                        <h6>Earum pariatur odit id cupiditate</h6>
                        <span>9 Jul, 2023</span>
                      </div>
                      <div className="text-right">2min, Read</div>
                    </div>
                  </div>
                </a>
                <a href="blog-details.html" className="item">
                  <div className="blog-box">
                    <img
                      src="assets/img/1cover.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="blog-text">
                      <div className="text-left">
                        <h6>Earum pariatur odit id cupiditate</h6>
                        <span>9 Jul, 2023</span>
                      </div>
                      <div className="text-right">2min, Read</div>
                    </div>
                  </div>
                </a>
                <a href="blog-details.html" className="item">
                  <div className="blog-box">
                    <img
                      src="assets/img/1cover.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="blog-text">
                      <div className="text-left">
                        <h6>Earum pariatur odit id cupiditate</h6>
                        <span>9 Jul, 2023</span>
                      </div>
                      <div className="text-right">2min, Read</div>
                    </div>
                  </div>
                </a>
                <a href="blog-details.html" className="item">
                  <div className="blog-box">
                    <img
                      src="assets/img/1cover.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="blog-text">
                      <div className="text-left">
                        <h6>Earum pariatur odit id cupiditate</h6>
                        <span>9 Jul, 2023</span>
                      </div>
                      <div className="text-right">2min, Read</div>
                    </div>
                  </div>
                </a>
                <a href="blog-details.html" className="item">
                  <div className="blog-box">
                    <img
                      src="assets/img/1cover.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="blog-text">
                      <div className="text-left">
                        <h6>Earum pariatur odit id cupiditate</h6>
                        <span>9 Jul, 2023</span>
                      </div>
                      <div className="text-right">2min, Read</div>
                    </div>
                  </div>
                </a>

                {/* Repeat for other blog items */}
              </Slider>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
