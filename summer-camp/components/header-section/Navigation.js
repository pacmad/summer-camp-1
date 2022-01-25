import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation ">
      <nav class="navbar navbar-expand-lg container navbar-light  ">
        <div class="container-fluid ">
          <Link class="navbar-brand " href="/">
            Emmaüs
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li class="nav-item nav-link ">
                <Link class="active" aria-current="page" href="/">
                  Accueil
                </Link>
              </li>
              <li class="nav-item nav-link">
                <Link href="/contact">Contact</Link>
              </li>
              <li class="nav-item nav-link">
                <Link href="/faq">infos</Link>
              </li>
              <li class="nav-item nav-link">
                <Link href="/register">Inscription</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
