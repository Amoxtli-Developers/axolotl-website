"use client";

import React, { useRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";

import axolotl1 from "@assets/about/axo.png";
import axolotl2 from "@assets/about/axo.png";
import axolotl3 from "@assets/about/axo.png";

const images = [axolotl1, axolotl2, axolotl3];

export default function About() {
  const textRef = useRef(null);
  const sliderRef = useRef(null);

  const textInView = useInView(textRef, { once: true, amount: 0.2 });
  const sliderInView = useInView(sliderRef, { once: true, amount: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i: number) => ( //eslint-disable-line
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "#E0E0E0",
          borderRadius: "50%",
        }}
        className="dot"
      ></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        {/* Image Slider with Animation */}
        <Grid item xs={12} md={6}>
          <motion.div
            ref={sliderRef}
            initial="hidden"
            animate={sliderInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box>
              <Slider {...sliderSettings} className="slider">
                {images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Axolotl ${index + 1}`}
                      width={300}
                      height={300}
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </motion.div>
        </Grid>

        {/* Text Content Section with Animation */}
        <Grid item xs={12} md={6}>
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              ¿Quiénes somos?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: "0.9rem", sm: "22px" },
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "justify" },
              }}
            >
              En{" "}
              <b style={{ color: "#4A9B98" }}>Reptilario y Ajolotario Quetzal</b>, somos un santuario
              en Xochimilco dedicado al rescate y conservación de especies
              exóticas y nativas. Nos enfocamos en proteger animales en peligro
              y en educar a la comunidad sobre la importancia de preservar
              nuestra biodiversidad. A través de nuestro compromiso, buscamos
              inspirar respeto y cuidado por la vida silvestre, especialmente
              por especies emblemáticas como el ajolote.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#4A9B98",
                borderColor: "#4A9B98",
                borderRadius: "30px",
                px: { xs: 2, md: 4 },
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#4A9B98",
                  color: "white",
                },
              }}
            >
              Descubre cómo ayudar
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
