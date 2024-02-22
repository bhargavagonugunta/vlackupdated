import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
//import vlack from "../components/vlack";
import PortfolioTwo from "../components/PortfolioTwo";
import Project from "../components/Project";

import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const HomeTwo = () => {
  return (
    <Layout pageTitle="Vlack | Business & Digital Agency">
      <Header
        headerClass="header__area-2"
        menuClass="main-menu-2"
        sideMenuClass="icon-white"
      />
      <main>
        <HeroTwo />
        <PortfolioTwo extraClass="pb-120" />
        <Project subTitle="Ready to get your digital projects" />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
