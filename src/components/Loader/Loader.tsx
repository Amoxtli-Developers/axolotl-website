"use client";

import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 350); // Incremento cada 200ms
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        px: 2, // Padding en móvil
      }}
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        size={80}
        thickness={5}
        sx={{
          color: "#4A9B98",
          mb: 4,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#0f0f0f",
          mb: 2,
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        ¡Preparando tu viaje al corazón de Xochimilco!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#0f0f0f",
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        Estamos cargando una experiencia única desde el{" "}
        <b style={{color: "#4A9B98"}}>Reptilario y Ajolotario Quetzal</b>
      </Typography>
    </Box>
  );
}
