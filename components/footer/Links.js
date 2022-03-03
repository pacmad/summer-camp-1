export default function Links() {
  return (
    <div>
      <footer className="text-center text-lg-start ">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Emmaüs Scherwiller
                </h6>
                <p>6 Place Abbé Pierre 67750 Scherwiller</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Liens rapides</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Mentions Légales
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Protection des données
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Service civique
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bénévolat
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> 6 Place Abbé Pierre{" "}
                  <br></br>
                  677750 Scherwiller
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 33 234 567 88
                </p>
                {/* <p>
                  <i className="fas fa-print me-3"></i> + 33 234 567 89
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
