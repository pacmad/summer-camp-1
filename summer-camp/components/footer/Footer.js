import React from "react";
import Copyright from "./Copyright";
import Links from "./Links";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="text-center pt-5 text-white">
          <h2 className="text-light">Lorem ipsum, t. Vitae, sit!</h2>
          <h4>Lorem, ipsum.</h4>
        </div>
        <NewsletterForm />
        <Links />
        <Copyright />
      </div>
    </div>
  );
}
