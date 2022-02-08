import React from "react";
import HeaderTitre from "./HeaderTitre";
import Navigation from "./Navigation";

export default function Header({ t }) {
  return (
    <div className=" header ">
      <HeaderTitre t={t} />
    </div>
  );
}
