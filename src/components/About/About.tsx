"use client";

import React, { useRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import axolotl1 from "@assets/about/image1.jpeg";
import axolotl2 from "@assets/about/image2.jpeg";
import axolotl3 from "@assets/about/image3.jpeg";

const images = [axolotl1, axolotl2, axolotl3];

interface HeaderProps {
  handleDialogOpen: () => void;
}

export default function About({ handleDialogOpen }: HeaderProps) {
  const textRef = useRef(null);
  const sliderRef = useRef(null);

  const textInView = useInView(textRef, { once: true, amount: 0.2 });
  const sliderInView = useInView(sliderRef, { once: true, amount: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "70vh",
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
            <Box
              sx={{


                margin: "0 auto",
              }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="slider"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: { xs: "300px", md: "500px" }, // Ajusta la altura del slider
                        width: "100%", // Ajusta el ancho del slider
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Axolotl ${index + 1}`}
                        width={700} // Aumenta el ancho de la imagen
                        height={500} // Ajusta la altura para mantener proporción
                        style={{
                          borderRadius: "16px", // Bordes redondeados
                          objectFit: "cover", // Asegura que la imagen se ajuste al contenedor
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
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
              <b style={{ color: "#4A9B98" }}>
                Reptilario y Ajolotario Quetzal
              </b>
              , somos una asociación civil y santuario ubicado en Xochimilco,
              dedicado al rescate, conservación y protección de diversas
              especies exóticas, nativas y en peligro de extinción. Nos
              enfocamos en cuidar animales de granja, de compañía, reptiles, y
              en especial a nuestro emblemático amigo, el ajolote de Xochimilco.
              A través de nuestro compromiso, buscamos educar a la comunidad
              sobre la importancia de preservar nuestra biodiversidad e inspirar
              respeto y cuidado por la vida silvestre, promoviendo un mayor amor
              por nuestro entorno natural.
            </Typography>

            <Button
              variant="outlined"
              onClick={handleDialogOpen}
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
