"use client";

import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

export default function AxolotlHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: `url('/assets/header/axolotlBack.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column", // Stack content vertically for small screens
        px: { xs: 2, sm: 4, md: 6 }, // Padding for small screens
        mt: { xs: "32px", md: "64px" }, // Adjust margin for different screens
      }}
    >
      {/* Darken Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll
        variants={fadeUpVariants}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          padding: "0 1rem", // Add padding for extra text spacing on small screens
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            lineHeight: 1.2,
            mb: { xs: 1, md: 2 },
          }}
        >
          El Ajolote: Tesoro <br /> de Xochimilco
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.6,
            maxWidth: "600px",
            mx: "auto",
            mt: { xs: 1, md: 2 }, // Adjust spacing between elements for different screens
          }}
        >
          Un ser único que nos conecta con la naturaleza, la historia y la
          ciencia.
        </Typography>
      </motion.div>
    </Box>
  );
}
