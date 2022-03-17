import React from "react";
import HeaderTitre from "./HeaderTitre";

export default function Header({ t }) {
  return (
    <div className=" header ">
      <HeaderTitre t={t} />
    </div>
  );
}
