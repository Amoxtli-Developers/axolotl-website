"use client";

import React from "react";
import { Box, Card, Typography, Button, List, ListItem } from "@mui/material";
import Image from "next/image";

type Feature = {
  text: string;
  icon?: string; // Opcional: icono para cada característica
};

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  features: Feature[]; // Lista de características con texto y opcionalmente iconos
  backgroundColor?: string; // Color de fondo personalizable
  textColor?: string; // Color de texto personalizable
  cardIcon: string; // Icono principal de la tarjeta
  onReserveClick?: () => void; // Función para manejar clic en el botón Reservar
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  features,
  backgroundColor = "white",
  textColor = "#4A9B98",
  onReserveClick,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        p: 4,
        textAlign: "center",
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      {/* Card Title */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        {price}
      </Typography>

      {/* Features List */}
      <List
        sx={{
          textAlign: "left",
          marginTop: 2,
          flexGrow: 1, // Estira la lista para llenar el espacio disponible
        }}
      >
        {features.map((feature, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              py: 0.5,
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            {/* Si hay icono lo muestra, sino usa un marcador por defecto */}
            {feature.icon ? (
              <Image src={feature.icon} alt="Feature Icon" width={20} height={20} />
            ) : (
              "🐾"
            )}
            {feature.text}
          </ListItem>
        ))}
      </List>

      {/* Reservar Button */}
      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={onReserveClick} // Llama a la función pasada como prop
          sx={{
            color: textColor,
            borderColor: textColor,
            "&:hover": {
              backgroundColor: textColor,
              color: backgroundColor,
            },
            borderRadius: "24px",
            px: 10,
            py: 1.5,
          }}
        >
          Reservar
        </Button>
      </Box>
    </Card>
  );
};

export default PricingCard;
