import React from "react";
import Layout from "../components/Layout";

export default function application() {
  return (
    <Layout page="Application">
      <div>
        <div className="approach">
          <div className="photo-header"></div>
          <div className="approach-content container rounded">
            <h1>Application</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              voluptatum sus ore harum.
            </p>

            <form>
              <fieldset className="form-group">
                <div className="row"></div>
              </fieldset>
              <div className="row">
                {/* name */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Nom"
                      id="name"
                    />
                  </div>
                </div>
                {/* Last name */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Prénom"
                      id="lastName"
                    />
                  </div>
                </div>

                {/* email */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>
                {/* Scan pass */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="file_pass">Passport Scan</label>
                    <input
                      type="file"
                      id="file_pass"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* Scan visa */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="file_visa">Passport Scan</label>
                    <input
                      type="file"
                      id="file_visa"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* Scan ticket */}
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="file_ticket">Passport Scan</label>
                    <input
                      type="file"
                      id="file_ticket"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary text-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
