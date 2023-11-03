import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AddBlog() {
  return (
    <>
      <Navbar />
      <section className="blog-create" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-end">
              <button type="submit" className="btn blog-link">
                Publish
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="post"
                  role="tabpanel"
                  aria-labelledby="post-tab"
                >
                  <div className="blog-create-box">
                    <div className="blog-create-text">
                      {/* <h5>Add Title</h5> */}
                      <input
                        type="text"
                        placeholder="Add Title"
                        style={{
                          fontWeight: 600,
                          fontSize: "24px",
                          marginBottom: "1.25rem",
                        }}
                      ></input>
                      {/* <span>Type to Choose block</span> */}
                      <input
                        type="text"
                        placeholder="Add Description"
                        style={{ fontSize: "15px" }}
                      ></input>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="post-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#post"
                    type="button"
                    role="tab"
                    aria-controls="post"
                    aria-selected="true"
                  >
                    Post
                  </button>
                  <button
                    className="nav-link"
                    id="summary-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#summary"
                    type="button"
                    role="tab"
                    aria-controls="summary"
                    aria-selected="false"
                  >
                    Summary
                  </button>
                  <button
                    className="nav-link"
                    id="catagory-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#catagory"
                    type="button"
                    role="tab"
                    aria-controls="catagory"
                    aria-selected="false"
                  >
                    Catagory
                  </button>
                  <button
                    className="nav-link"
                    id="tags-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tags"
                    type="button"
                    role="tab"
                    aria-controls="tags"
                    aria-selected="false"
                  >
                    Tags
                  </button>
                  <button
                    className="nav-link"
                    id="expired"
                    data-bs-toggle="pill"
                    data-bs-target="#expired"
                    type="button"
                    role="tab"
                    aria-controls="expired"
                    aria-selected="false"
                  >
                    Expired
                  </button>
                  <button
                    className="nav-link"
                    id="featured-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#featured"
                    type="button"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="false"
                  >
                    Featured Image
                  </button>
                  <button
                    className="nav-link"
                    id="discussion-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#discussion"
                    type="button"
                    role="tab"
                    aria-controls="discussion"
                    aria-selected="false"
                  >
                    Discussion
                  </button>
                  <button
                    className="nav-link"
                    id="post-setting-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#post-setting"
                    type="button"
                    role="tab"
                    aria-controls="post-setting"
                    aria-selected="false"
                  >
                    Post Setting
                  </button>
                  <button
                    className="nav-link"
                    id="post-video-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#post-video"
                    type="button"
                    role="tab"
                    aria-controls="post-video"
                    aria-selected="false"
                  >
                    Post Video
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddBlog;
