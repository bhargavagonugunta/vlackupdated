import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import React from "react";
import TermsCard from "../components/TermsCard";
import RefundCard from "../components/RefundCard";

const RefundPage = () => {
  return (
    <Layout pageTitle="Vlack | Business & Digital Agency">
      <PageHeader title="Refund Policy " crumbTitle="Refund" />
      <Header
        heroLogo="/assets/images/logo/logo.svg"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <RefundCard />
      </main>
      <Footer />
    </Layout>
  );
};

export default RefundPage;
