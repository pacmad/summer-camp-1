import React from "react";
import Copyright from "./Copyright";
import Links from "./Links";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="text-center pt-5 text-white">
          <h1>Lorem ipsum, t. Vitae, sit!</h1>
          <h4>Lorem, ipsum.</h4>
        </div>
        <NewsletterForm />
        <Links />
        <Copyright />
      </div>
    </div>
  );
}
