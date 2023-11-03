import React from "react";

function AddPackage() {
  return (
    <>
      <div className="open-icon d-block d-lg-none mx-0">
        <span onclick="openNav()" className="openbtn">
          <i className="fa-solid fa-bars-staggered" />
        </span>
      </div>
      <div className="dashContainer">
        <div className="page_title">
          <h5 className="dashheading">Create Package</h5>
        </div>
        <div className="createPackageForm">
          <form action className="create_Package_Form">
            <div className="mb-4">
              <label htmlFor>Your package tile here</label>
              <input
                type="text"
                placeholder="Your package tile here"
                className="title mb-4"
              />
            </div>
            <div className="mb-4">
              <label htmlFor>Package description (optional)</label>
              <textarea
                id="context"
                name="context"
                className="textar"
                placeholder="Package description"
                style={{ height: "110px" }}
                defaultValue={""}
              />
            </div>
            <div className="mb-4">
              <label htmlFor>Time frame</label>
              <div className="btn_radios">
                <div className="btn_radio me-1">
                  <input
                    type="radio"
                    id="Monthly"
                    defaultValue="Monthly"
                    name="packDuration"
                    defaultChecked
                  />
                  <label htmlFor="Monthly">Monthly</label>
                </div>
                <div className="btn_radio me-1">
                  <input
                    type="radio"
                    id="Weekly"
                    defaultValue="Weekly"
                    name="packDuration"
                  />
                  <label htmlFor="Weekly">Weekly</label>
                </div>
                <div className="btn_radio me-1">
                  <input
                    type="radio"
                    id="Daily"
                    defaultValue="Daily"
                    name="packDuration"
                  />
                  <label htmlFor="Daily">Daily</label>
                </div>
                <div className="btn_radio">
                  <input
                    type="radio"
                    id="Yearly"
                    defaultValue="Yearly"
                    name="packDuration"
                  />
                  <label htmlFor="Yearly">Yearly</label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor>Price</label>
              <div className="price_field">
                <strong>$</strong>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder={0.0}
                  defaultValue
                  className="Price"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor>Cover image (optional)</label>
              <div>
                <label htmlFor="upload" className="upload_label">
                  <img src="assets/img/gallery.png" height={20} width={20} />
                  &nbsp;
                  <strong
                    id="imageName"
                    style={{ fontSize: "13px", height: "40px" }}
                  >
                    Add cover image
                  </strong>
                </label>
                <input type="file" id="upload" style={{ display: "none" }} />
              </div>
            </div>
            <div className="text-center">
              <button type="button" id="submitPackage" className="btn btn-info">
                Create Package
              </button>
            </div>
          </form>
          {/* <form action="http://omega.5gsoftware.net/addPackage" class="profileform" id="packageForm" method="post"
          enctype="multipart/form-data">
          <label for="">Cover image (optional)</label>
          <div>
            <a id="coverSelector">
              <img src="assets/img/gallery.png" height="20" width="20" />
              &nbsp
              <strong id="imageName" style="font-size: 13px; height: 40px">Add cover image</strong>
            </a>
          </div>
          <div style="display: none">
            <input id="fileInput" type="file" class="uploadPackageCover" accept="image/*" name="cover" />
          </div>
  
          <br /><br />
          <input type="hidden" name="token" value="tOUyoHzcHh" />
          <button type="button" id="submitPackage" class="btn btn-info">
            Create Package
          </button>
        </form> */}
        </div>
      </div>
    </>
  );
}

export default AddPackage;
