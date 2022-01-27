import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation  ">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark  ">
        <div className="container ">
          <Link className="navbar-brand " href="/">
            Emmaüs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item nav-link ">
                <Link className="active" aria-current="page" href="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/faq">Faq</Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/register">Inscription</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
