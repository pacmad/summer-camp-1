import React from "react";

export default function HeaderTitre({ t }) {
  return (
    <div className="p-5 header-titre text-center shadow ">
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <a href="#" className="btn btn-primary text-light m-1 hvr-icon-forward">
        {t("cta-btn1")} <i class="fas fa-angle-right hvr-icon"></i>
      </a>
      <a href="/register" className="btn btn-secondary m-1 ">
        {t("cta-btn2")} <i class="fas fa-angle-right "></i>
      </a>
    </div>
  );
}
