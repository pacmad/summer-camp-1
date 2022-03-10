import React from "react";
import LocaleSwitcher from "../header-section/LocaleSwitcher";

export default function LangSwitcher() {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-primary text-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          lang
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
  );
}
