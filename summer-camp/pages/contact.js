import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Navigation from "../components/header-section/Navigation";

export default function contact() {
  return (
    <Layout page="Contact">
      <div className="contact">
        <div className="contact-content  container rounded">
          <h1>Contact</h1>
          <p>Hate de vous lire !</p>

          <div className="row my-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="Your Name*"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="Your Email*"
                />
              </div>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="Your phone*"
                />
              </div>
              {/* btn */}
              <button>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Envoyer</span>
              </button>
              {/* btn */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  style={{ width: "100%", height: "150px" }}
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your message *"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
