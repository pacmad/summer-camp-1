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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            molestiae quisquam nisi. Maxime consequuntur recusandae fuga neque,
            fugiat blanditiis placeat porro debitis. Incidunt omnis magni in
            deleniti nesciunt!
          </p>

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
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary text-light m-1"
                />
              </div>
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
