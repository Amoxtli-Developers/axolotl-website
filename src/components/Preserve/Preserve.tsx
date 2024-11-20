"use client";

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import preserveImage from "@assets/preserve/axolotlSilhouette.svg";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Preserve() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <Box
        sx={{
          backgroundColor: "#4A9B98", // Background color matching the design
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          mt: { xs: "32px", md: "64px" },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" }, // Stack content on mobile
          }}
        >
          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
            }}
          >
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" }, // Adjust font size for responsiveness
                }}
              >
                Sé Parte de la Conservación
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  lineHeight: 1.6,
                  mb: 3,
                  fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for smaller screens
                }}
              >
                Únete a nuestra misión de proteger y preservar las especies de
                Xochimilco. Como voluntario en el{" "}
                <b>Reptilario y Ajolotario Quetzal</b>, podrás colaborar en el
                cuidado de animales, apoyar en proyectos de conservación y
                participar en actividades educativas. Vive una experiencia única
                mientras contribuyes activamente a la conservación de la
                biodiversidad local.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderRadius: "30px",
                    px: 4,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#6BA59B",
                    },
                  }}
                >
                  Inscribirse
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Illustration Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" }, // Center on mobile
              alignItems: "center",
            }}
          >
            <motion.div variants={fadeInVariants}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "80%", md: "100%" }, // Adjust image size for responsiveness
                  maxWidth: "500px", // Limit maximum width
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={preserveImage}
                  alt="Ajolote Drawing"
                  width={500}
                  height={300}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
