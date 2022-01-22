import Header from "../components/header-section/Header";
import CardsActivity from "../components/infos-section/cards-activity/CardsActivity";
import Cards from "../components/infos-section/cards/Cards";
import Tabs from "../components/infos-section/tabs/Tabs";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout page="Summer camp - Home">
      <Header />
      <div className="container">
        <Cards />
        <Tabs />
        <CardsActivity />
      </div>
    </Layout>
  );
}
