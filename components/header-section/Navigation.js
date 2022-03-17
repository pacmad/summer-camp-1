import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navigation({ t }) {
  let router = useRouter();
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                objectFit="cover"
                src="/images/logo-emmaus.png"
                alt="logo-emmaus"
                width={170}
                height={50}
              />
            </a>
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
                <Link href="/">
                  <a className={router.pathname == "/" ? "active" : ""}>
                    {t("accueil")}
                  </a>
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "active" : ""}>
                    {t("à propos")}
                  </a>
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/register">
                  <a className={router.pathname == "/register" ? "active" : ""}>
                    {t("inscription")}
                  </a>
                </Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav">
              {router.locales.map((locale) => (
                <li key={locale} className="nav-item nav-link">
                  <Link href={router.asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
                </li>
              ))}
            </ul> */}

            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-globe"></i>{" "}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {/* {router.locales.map((locale) => (
                  <li key={locale}>
                    <Link href={router.asPath} locale={locale}>
                      <a class="dropdown-item text-dark">{locale}</a>
                    </Link>
                  </li>
                ))} */}
                <li>
                  <LocaleSwitcher />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
