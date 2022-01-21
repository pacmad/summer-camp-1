import Head from "next/head";
import Footer from "./footer/Footer";
import Navigation from "./header-section/Navigation";

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Navigation />

      {children}

      <Footer />
    </div>
  );
}
