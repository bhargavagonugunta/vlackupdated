import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import React from "react";
import PrivasyPolacyCard from "../components/PrivasyPolacyCard";

const PPage = () => {
  return (
    <Layout pageTitle="Vlack Privacy Policy">
      <PageHeader title="Privacy Policy" crumbTitle="Teams " />
      <Header
        heroLogo="/assets/images/logo/logo.svg"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <PrivasyPolacyCard />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default PPage;
