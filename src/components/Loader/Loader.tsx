"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Lottie from "react-lottie-player";
import animationData from "../../../public/assets/animation.json"; // Asegúrate de que la ruta sea correcta

export default function Loader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Asegura que este código solo se ejecute en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evita renderizar en el servidor
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
}
