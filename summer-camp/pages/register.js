import React from "react";
import Layout from "../components/Layout";

export default function register() {
  return (
    <Layout page="Register">
      <div className="register">
        <div className="photo-header"></div>

        <div className="register-content container rounded">
          <h1>Inscription</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            voluptatum suscipit officiis cum libero labore rem enim ipsa
            quisquam dignissimos, ullam, eius dolore voluptates! Quia fugiat
            atque ab nemo iure optio earum tempore? Veritatis laudantium
            repudiandae eveniet odit sit recusandae reprehenderit est? Nulla,
            blanditiis velit. Odit nam quae inventore harum.
          </p>
          <p className="text-center">Je suis :</p>

          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="arrival-date">Date arrivée</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="First name"
                  id="arrival-date"
                ></input>
              </div>
              <div className="col">
                <label htmlFor="departur-date">Date départ</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Last name"
                  id="departur-date"
                ></input>
              </div>
            </div>
            <button type="submit" class="btn btn-primary text-light">
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
