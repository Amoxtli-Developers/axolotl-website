"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import axolotlIcon from "@assets/icons/xochimilco/axolotlIconBlack.svg";
import binocularsIcon from "@assets/icons/xochimilco/binocularsIconBlack.svg";
import pyramidIcon from "@assets/icons/xochimilco/pyramidIconBlack.svg";

export default function XochimilcoComponent() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "100vh",
        alignContent: "center",
        marginTop: "2rem",
      }}
    >
      {/* Animated Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        variants={containerVariants}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: { xs: 3, md: 4 },
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
          }}
          className="text-foreground"
        >
          Xochimilco: Historia Viva <br /> y Santuario Natural
        </Typography>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        variants={containerVariants}
      >
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#B3D9D9",
                borderRadius: "30px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                p: { xs: 2, md: 3 },
              }}
              className="shadow-2xl"
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "left" },
                    mb: 2,
                  }}
                >
                  <Image
                    src={pyramidIcon}
                    alt="Pyramid Icon"
                    width={35}
                    height={35}
                  />
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "left",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                  className="text-foreground"
                >
                  Historia Ancestral de Xochimilco
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{ xs: "0.875rem", md: "1rem" }}
                  textAlign={"justify"}
                  className="text-foreground"
                >
                  Xochimilco, conocido como el &apos;lugar de las flores&apos;,
                  significa &quot;campo de flores&quot; en Náhuatl. Este lugar se
                  distingue por sus preciosos canales y sus chinampas llenas de
                  flores y sembradíos de hortalizas. Desde tiempos
                  prehispánicos, Xochimilco ha sido un tesoro natural. Sus
                  chinampas, sistemas agrícolas flotantes creados por las
                  culturas mexicas, representan una maravilla de ingeniería y
                  biodiversidad que ha perdurado por siglos. Este entorno no
                  solo proporcionó alimentos, sino que también estableció un
                  ecosistema único en el mundo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#C7E6C2",
                borderRadius: "30px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                p: { xs: 2, md: 3 },
              }}
              className="shadow"
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "left" },
                    mb: 2,
                  }}
                >
                  <Image
                    src={axolotlIcon}
                    alt="Axolotl Icon"
                    width={35}
                    height={35}
                  />
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "left",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                  className="text-foreground"
                >
                  Refugio de Especies Únicas
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{ xs: "0.875rem", md: "1rem" }}
                  textAlign={"justify"}
                  className="text-foreground"
                >
                  ¿Sabes quién habita los canales? El canal es hogar del
                  Axolotl, del náhuatl &quot;monstruo de agua&quot;, mejor conocido como
                  ajolote. Este pequeño anfibio es capaz de regenerar sus
                  extremidades y órganos, pero lamentablemente está en peligro
                  de extinción. Hoy en día, Xochimilco es hogar de especies como
                  el ajolote, un símbolo de resistencia y regeneración. Este
                  ecosistema es vital para la supervivencia de flora y fauna
                  endémicas, convirtiéndose en un refugio natural que debemos
                  proteger y preservar para las futuras generaciones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundColor: "#77987A",
                borderRadius: "30px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                p: { xs: 2, md: 3 },
              }}
              className="shadow-2xl"
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "left" },
                    mb: 2,
                  }}
                >
                  <Image
                    src={binocularsIcon}
                    alt="Binoculars Icon"
                    width={35}
                    height={35}
                  />
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "left",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                  className="text-foreground"
                >
                  Reptilario y Ajolotario Quetzal: Compromiso con la
                  Conservación
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{ xs: "0.875rem", md: "1rem" }}
                  textAlign={"justify"}
                  className="text-foreground"
                >
                  En el <b>Reptilario y Ajolotario Quetzal</b>, trabajamos cada día
                  para rescatar, rehabilitar y conservar especies exóticas y
                  nativas de Xochimilco. Nos dedicamos a educar sobre la
                  importancia de la biodiversidad y a inspirar acciones de
                  conservación para preservar este paraíso natural y cultural
                  único. Actualmente, existen varias asociaciones civiles que
                  también se dedican a proteger y reproducir al ajolote en
                  cautiverio, utilizando estanques de semilibertad para
                  garantizar su supervivencia y contribuir a la restauración de
                  su población en su hábitat natural.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
