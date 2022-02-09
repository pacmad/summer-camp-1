import React from "react";
import AboutSection from "../components/aboutFaq/AboutSection";
import Citation from "../components/aboutFaq/Citation";
import FaqSection from "../components/aboutFaq/FaqSection";
import Layout from "../components/Layout";
import { useTranslations } from "next-intl";

export default function faq() {
  const t = useTranslations("about");

  return (
    <Layout page="À Propos">
      <div className="about">
        <div className="photo-header"></div>
        <AboutSection t={t} />
        <Citation />
        <FaqSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  };
}
