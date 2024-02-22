import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

const ContactPage = () => {
  return (
    <Layout pageTitle="Vlack | Business & Digital Agency">
      <PageHeader title="Contact us" crumbTitle="Contact us" />
      <Header
        heroLogo="/assets/images/logo/logo.svg"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Contact />
        <QuoteForm />
        <ContactForm />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
