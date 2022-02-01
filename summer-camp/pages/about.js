import React from "react";
import AboutSection from "../components/aboutFaq/AboutSection";
import FaqSection from "../components/aboutFaq/FaqSection";
import Layout from "../components/Layout";

export default function faq() {
  return (
    <Layout page="FAQ">
      <div className="faq ">
        <div className="photo-header"></div>
        <AboutSection />
        <FaqSection />
      </div>
    </Layout>
  );
}
