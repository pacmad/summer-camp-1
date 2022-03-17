import React from "react";
import Link from "next/link";

export default function HeaderTitre({ t }) {
  return (
    <div className="p-5 header-titre text-center shadow container">
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <Link href="/about">
        <a className="btn btn-primary text-light m-1">
          {t("cta-btn1")} <i class="fas fa-angle-right"></i>
        </a>
      </Link>
      <Link href="/register">
        <a className="btn btn-outline-secondary m-1 ">
          {t("cta-btn2")} <i class="fas fa-angle-right "></i>
        </a>
      </Link>
    </div>
  );
}
