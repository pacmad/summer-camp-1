import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FormApi from "../components/FormApi";

export default function register() {
  const t = useTranslations("register");

  return (
    <Layout page="Register">
      <div className="register">
        <div className="photo-header"></div>
        <div className="register-content container rounded">
          <h1>{t("title")}</h1>
          <p className="subtitle">Je participe aux chantiers d'été Emmaüs</p>
          <div className="row my-5">
            <div className="col-md-6">
              <p>
                Participer à un chantier d'été, c'est faire du bénévolat, aux
                côtés des acteurs Emmaüs, mais c'est aussi faire de belles
                rencontres avec des personnes de tous horizons, découvrir le
                fonctionnement d'une association Emmaüs, comprendre les enjeux
                de l'économie sociale et solidaire et du réemploi, et vivre une
                expérience unique !{" "}
              </p>
            </div>
            <div className="col-md-6">
              <Image
                className="rounded  shadow "
                src="/images/emmaus7.jpg"
                alt="chantier-ete-emmaus"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* form */}
          <form>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">
                  Je suis :
                </legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Un garçon
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
                      Une fille
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="row">
              {/* datepicker */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="date">CHOOSE A START DATE</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="date"
                    id="date"
                  />
                </div>
              </div>
              {/* duration */}
              <div className="col-md-6 mb-3">
                <label htmlFor="name">HOW MANY WEEKS? *</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="selected">---</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </div>
              {/* name */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nom"
                    id="name"
                  />
                </div>
              </div>
              {/* Last name */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="lastName">Prénom</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Prénom"
                    id="lastName"
                  />
                </div>
              </div>
              {/* date of birth */}
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="birthday">Date de naissance</label>
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
                  <label htmlFor="phone">N° tél</label>
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
                <label htmlFor="inputZip">Code postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="67200"
                />
              </div>
              {/* city */}
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputCity">Ville</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              {/* country */}
              <div className="form-group col-md-6">
                <label htmlFor="inputCountry">Pays</label>
                <input type="text" className="form-control" id="inputCountry" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary text-light mt-3">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      {/* form */}
      <FormApi />
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
