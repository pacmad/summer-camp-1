import Head from "next/head";
import Footer from "./footer/Footer";
import Navigation from "./header-section/Navigation";

export default function Layout({ children, page, nameOfPage, content }) {
  return (
    <div>
      <Head>
        <title>{page}</title>
        <meta name={nameOfPage} content={content} />
      </Head>

      {children}

      <Footer />
    </div>
  );
}
