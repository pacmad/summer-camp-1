import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "next-intl";

export default function register() {
  const t = useTranslations("register");

  return (
    <Layout page="Register">
      <div className="register">
        <div className="photo-header"></div>

        <div className="register-content container rounded">
          <h1>{t("title")}</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            voluptatum suscipit officiis cum libero labore rem enim ipsa
            quisquam dignissimos, ullam, ore harum.
          </p>
          <img
            className="img-fluid rounded shadow  m-3 w-50"
            src="../../images/emmaus8.jpg"
            alt="chantier-ete-emmaus"
          />
          {/* form */}
          <form>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">
                  You are :
                </legend>
                <div className="col-sm-10">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      A boy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      A girl
                    </label>
                  </div>
                </div>
              </div>
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
              {/* date of birth */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="birthday">Date of birth</label>
                  <input
                    type="text"
                    id="birthday"
                    className="form-control"
                    placeholder="ex: 16/04/1993"
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
              {/* phone */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="phone"
                  />
                </div>
              </div>
              {/* phone whatsapp */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="phone">Whatsapp</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="whatsapp"
                    placeholder="whatsapp n°"
                  />
                </div>
              </div>
            </div>
            {/* adresse */}
            <div className="form-group mb-3">
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="n° rue"
              />
            </div>

            <div className="row">
              {/* zip */}
              <div className="form-group col-md-6">
                <label for="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="67200"
                />
              </div>
              {/* city */}
              <div className="form-group col-md-6 mb-3">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              {/* country */}
              <div className="form-group col-md-6">
                <label for="inputCountry">Country</label>
                <input type="text" className="form-control" id="inputCountry" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  };
}
