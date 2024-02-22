import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
//import vlack from "../components/vlack";
import Faq from "../components/Faq";

import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <Layout pageTitle="Vlack | Business & Digital Agency">
      <PageHeader title="Services" crumbTitle="Services" />
      <Header
        heroLogo="/assets/images/logo/logo.svg"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Services />
        <Faq />

        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ServicesPage;
