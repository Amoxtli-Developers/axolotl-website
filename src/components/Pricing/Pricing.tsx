"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PricingCard from "@components/PricingCard/PricingCard";
import axolotlIconPrimary from "@assets/icons/pricing/axolotlIconPrimary.svg";
import axolotlIconSecondary from "@assets/icons/pricing/axolotlIconSecondary.svg";
import axolotlIconTertiary from "@assets/icons/pricing/axolotlIconTertiary.svg";

const pricingData = [
  {
    title: "Conoce Xochimilco",
    subtitle: "Tour Básico",
    price: "$500 MXN",
    features: [
      { text: "Incluye paseo guiado", icon: axolotlIconSecondary },
      { text: "Incluye visita a chinampas", icon: axolotlIconSecondary },
      { text: "Incluye explicación cultural", icon: axolotlIconSecondary },
      { text: "Incluye snacks locales", icon: axolotlIconSecondary },
      { text: "Incluye seguro básico", icon: axolotlIconSecondary },
      { text: "Incluye transporte interno", icon: axolotlIconSecondary },
    ],
    backgroundColor: "#ffffff",
    textColor: "#587542",
    cardIcon: axolotlIconPrimary,
  },
  {
    title: "Conoce Xochimilco",
    subtitle: "Tour Intermedio",
    price: "$800 MXN",
    features: [
      { text: "Todo lo del básico", icon: axolotlIconPrimary },
      { text: "Acceso a zonas restringidas", icon: axolotlIconPrimary },
      { text: "Guía personal", icon: axolotlIconPrimary },
      { text: "Fotografía profesional", icon: axolotlIconPrimary },
    ],
    backgroundColor: "#4A9B98",
    textColor: "#ffffff",
    cardIcon: axolotlIconSecondary,
  },
  {
    title: "Conoce Xochimilco",
    subtitle: "Tour Premium",
    price: "$1,200 MXN",
    features: [
      { text: "Todo lo del intermedio", icon: axolotlIconTertiary },
      { text: "Cena local", icon: axolotlIconTertiary },
      { text: "Acceso a recorridos nocturnos", icon: axolotlIconTertiary },
      { text: "Recuerdo personalizado", icon: axolotlIconTertiary },
    ],
    backgroundColor: "#ffffff",
    textColor: "#89C28C",
    cardIcon: axolotlIconTertiary,
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "100vh",
        alignContent: "center",
      }}
    >
      {/* Title Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 4 }}
          className="text-foreground"
        >
          Únete a la Conservación: <br />
          Tours por Xochimilco
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          Descubre la magia de Xochimilco y su riqueza natural a través de
          nuestros tours guiados. Explora la flora y fauna local, conoce el
          hábitat del ajolote y aprende sobre los esfuerzos de conservación que
          realizamos en el Reptilario y Ajolotario Quetzal. Todo lo recaudado se
          reinvierte directamente en el cuidado y protección de las especies,
          ayudando a preservar este ecosistema único para futuras generaciones.
        </Typography>
      </motion.div>

      {/* Grid Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Grid container spacing={4} justifyContent="center">
          {pricingData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PricingCard {...data} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
