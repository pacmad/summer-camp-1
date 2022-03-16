import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navigation({ t }) {
  let router = useRouter();
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <a>
              <Image
                src="/images/logo-emmaus.png"
                alt="logo-emmaus"
                width={200}
                height={60}
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
                <Link className="active" aria-current="page" href="/">
                  {t("accueil")}
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/about">{t("à propos")}</Link>
              </li>
              <li className="nav-item nav-link">
                <Link href="/register">{t("inscription")}</Link>
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
