"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Box,
} from "@mui/material";

const helpOptions = [
  {
    title: "Reservar un tour",
    description:
      "Visita el Reptilario y Ajolotario Quetzal y ayuda directamente a preservar especies en peligro. Los ingresos generados por los tours se utilizan para comprar alimento, recursos esenciales y mantener las instalaciones necesarias para el cuidado de los animales. Además, al participar, contribuyes a la educación ambiental y a la protección de la biodiversidad en Xochimilco.",
    link: "https://wa.link/7y8yno",
  },
  {
    title: "Comprar mercancía oficial",
    description:
      "Adquiere productos oficiales de Amoxtli Web Developers, el patrocinador oficial del Reptilario y Ajolotario Quetzal. Con la compra de sudaderas, gorras y playeras de la marca AWD, ayudas a recaudar fondos que se destinan directamente a la preservación y el bienestar de los animales en peligro. Explora la tienda en línea y forma parte de este esfuerzo solidario.",
    link: "https://www.amoxtli.tech/",
  },
  {
    title: "Conviértete en voluntario",
    description:
      "Únete al equipo del Reptilario y Ajolotario Quetzal como voluntario. Participa en tareas esenciales como la limpieza de instalaciones, el cuidado de los animales y actividades de preservación. Es una forma práctica y significativa de contribuir directamente al cuidado de la biodiversidad mientras apoyas esta noble causa.",
    link: "https://forms.gle/your-google-form-link",
  },
];

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function HelpDialog({ open, onClose }: HelpDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      sx={{
        ".MuiDialog-paper": {
          borderRadius: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: 4,
        },
      }}
    >
      <DialogTitle textAlign="center">¿Cómo puedes ayudar?</DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Apoyar al Reptilario y Ajolotario Quetzal es más fácil de lo que
          piensas.
        </Typography>
        <Grid container spacing={4}>
          {helpOptions.map((option, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#ffffff",
                  color: "#0f0f0f",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "30px",
                  p: 2,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: "bold", fontSize: "1.1rem" }}
                  >
                    {option.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, fontSize: "14px" }}>
                    {option.description}
                  </Typography>
                </CardContent>
                {option.link && (
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Link
                      href={option.link}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      sx={{
                        color: "#4A9B98",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      {option.title === "Conviértete en voluntario"
                        ? "Llena el formulario"
                        : option.title === "Reservar un tour"
                        ? "Reserva ahora"
                        : "Visita la tienda"}
                    </Link>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
