import Head from "next/head";
import Footer from "./footer/Footer";
import Navigation from "./header-section/Navigation";
import { useTranslations } from "next-intl";

export default function Layout({ children, page, nameOfPage, content }) {
  const t = useTranslations("layout");

  return (
    <div>
      <Head>
        <title>{page}</title>
        <meta name={nameOfPage} content={content} />
      </Head>
      <Navigation t={t} />

      {children}

      <Footer />
    </div>
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
