"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Header from "@components/Header/Header";
import Xochimilco from "@components/Xochimilco/Xochimilco";
import theme from "../../src/theme";
import About from "@components/About/About";
import HelpDialog from "@components/HelpDialog/HelpDialog";
import Pricing from "@components/Pricing/Pricing";
import GridExperience from "@components/GridExperience/GridExperience";
import AxolotlHeader from "@components/AxolotlHeader/AxolotlHeader";
import AxolotlGrid from "@components/AxolotlGrid/AxolotlGrid";
import Preserve from "@components/Preserve/Preserve";
import Footer from "@components/Footer/Footer";

const Loader = dynamic(() => import("@components/Loader/Loader"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleDialogOpen={handleDialogOpen} />
      <Xochimilco />
      <About handleDialogOpen={handleDialogOpen} />
      <HelpDialog open={openDialog} onClose={handleDialogClose} />
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
