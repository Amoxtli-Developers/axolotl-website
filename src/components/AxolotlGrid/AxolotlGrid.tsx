"use client";

import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import axolotl1 from "@assets/axolotl/history.jpg";
import axolotl2 from "@assets/axolotl/history.jpg";
import axolotl3 from "@assets/axolotl/history.jpg";
import axolotl4 from "@assets/axolotl/history.jpg";
import axolotl5 from "@assets/axolotl/history.jpg";

const cardData = [
  {
    image: axolotl1,
    title: "Historia del Ajolote",
    description:
      "El ajolote tiene una historia mítica y ancestral en la cultura mexicana. Reverenciado por las civilizaciones prehispánicas, este ser único es símbolo de transformación y regeneración.",
  },
  {
    image: axolotl2,
    title: "Conexión con Xochimilco",
    description:
      "El ajolote es un habitante nativo de los canales de Xochimilco, un ecosistema único donde ha vivido por siglos. Xochimilco es su único hábitat en el mundo.",
  },
  {
    image: axolotl3,
    title: "Importancia del Ajolote",
    description:
      "El ajolote es vital tanto para la ecología como para la ciencia. Su capacidad de regeneración ha despertado gran interés en la investigación médica y ecológica.",
  },
  {
    image: axolotl4,
    title: "Datos Curiosos",
    description:
      "El ajolote puede regenerar partes de su cuerpo, como el cerebro, el corazón y las extremidades, una capacidad que mantiene durante toda su vida.",
  },
  {
    image: axolotl5,
    title: "¿Por qué no se puede tener un ajolote en casa?",
    description:
      "Los ajolotes son animales vulnerables y mantenerlos en casa afecta su conservación y su hábitat natural. Su cuidado es complejo.",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AxolotlGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
          textAlign: "center",
          backgroundColor: "#F9F9F9",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Row 1: Three Cards */}
          {cardData.slice(0, 3).map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 1, color: "#587542" }}
                    textAlign={"left"}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem" }}
                    textAlign={"left"}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Row 2: Two Cards Sharing Space */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <Image
                src={cardData[3].image}
                alt={cardData[3].title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 1, color: "#4A9B98" }}
                  textAlign={"left"}
                >
                  {cardData[3].title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem" }}
                  textAlign={"left"}
                >
                  {cardData[3].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <Image
                src={cardData[4].image}
                alt={cardData[4].title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 1, color: "#587542" }}
                  textAlign={"left"}
                >
                  {cardData[4].title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem" }}
                  textAlign={"left"}
                >
                  {cardData[4].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
