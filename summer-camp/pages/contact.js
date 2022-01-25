import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Navigation from "../components/header-section/Navigation";

export default function contact() {
  return (
    <Layout page="Contact">
      <div className="contact">
        {/* <div
          className=""
          style={{ position: "relative", width: "100%", height: "500px" }}
        >
          <Image
            src="/images/summer3.jpg"
            alt="summer"
            layout="fill"
            objectFit="cover"
          />
          <div class="custom-shape-divider-bottom-1643047667">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div> */}

        <div className="header-pic">
          {/* <div className="hhh">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              molestiae quisquam nisi. Maxime consequuntur recusandae fuga
              neque, fugiat blanditiis placeat porro debitis. Incidunt omnis
              magni in deleniti nesciunt!
            </p>
          </div> */}
          <Navigation />
          <div className=" p-5 container contact-form rounded">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              molestiae quisquam nisi. Maxime consequuntur recusandae fuga
              neque, fugiat blanditiis placeat porro debitis. Incidunt omnis
              magni in deleniti nesciunt!
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
      </div>
    </Layout>
  );
}
