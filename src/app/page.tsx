"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextPage } from "next";
import Header from "@components/Header/Header";
import Xochimilco from "@components/Xochimilco/Xochimilco";
import theme from "../../src/theme";
import About from "@components/About/About";
import Help from "@components/Help/Help";
import Pricing from "@components/Pricing/Pricing";
import GridExperience from "@components/GridExperience/GridExperience";
import AxolotlHeader from "@components/AxolotlHeader/AxolotlHeader";
import AxolotlGrid from "@components/AxolotlGrid/AxolotlGrid";
import Preserve from "@components/Preserve/Preserve";
import Footer from "@components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Xochimilco />
      <About />
      <Help />
      <Pricing />
      <GridExperience />
      <AxolotlHeader />
      <AxolotlGrid />
      <Preserve />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
