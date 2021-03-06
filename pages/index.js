import Header from "../components/header-section/Header";
import CardActivity from "../components/infos-section/cards-activity/CardActivity";
import Tabs from "../components/infos-section/tabs/Tabs";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { useTranslations } from "next-intl";
import CardsInfo from "../components/infos-section/cards/CardsInfo";

export default function Home() {
  const t = useTranslations("home");

  return (
    <Layout page="Summer camp - Accueil">
      <Header t={t} />
      <div className="container">
        <CardsInfo t={t} />
        <Tabs t={t} />
        <CardActivity t={t} />
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
