"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { LocalHospital, Pets, Forest } from "@mui/icons-material";
import HelpCard from "@components/HelpCard/HelpCard";
import secondaryLogo from "@assets/secondaryLogo.svg";
import Image from "next/image";

const helpItems = [
  {
    icon: <Pets sx={{ color: "#4A9B98", fontSize: "3rem" }} />,
    title: "Rescate de Especies en peligro",
    description:
      "Recuperamos animales en peligro o abandonados, brindándoles un entorno seguro y atención especializada.",
  },
  {
    icon: <LocalHospital sx={{ color: "#89C28C", fontSize: "3rem" }} />,
    title: "Rehabilitación y Cuidado Médico",
    description:
      "Ofrecemos cuidados médicos y rehabilitación a las especies rescatadas para asegurar su bienestar y recuperación.",
  },
  {
    icon: <Forest sx={{ color: "#587542", fontSize: "3rem" }} />,
    title: "Conservación de Especies Nativas",
    description:
      "Nos enfocamos en la protección de especies endémicas, como el ajolote, que son esenciales para el ecosistema de Xochimilco.",
  },
  {
    icon: <Forest sx={{ color: "#587542", fontSize: "3rem" }} />,
    title: "Conservación de Especies Nativas",
    description:
      "Nos enfocamos en la protección de especies endémicas, como el ajolote, que son esenciales para el ecosistema de Xochimilco.",
  },
];

export default function Help() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const swiperVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "50vh",
        alignContent: "center",
        marginTop: "2rem",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 3 },
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
            }}
          >
            ¿Cómo ayudamos en
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={secondaryLogo}
              alt="Secondary Logo"
              width={120}
              height={50}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontWeight: "bold",
              display: { xs: "none", md: "block" },
            }}
          >
            ?
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={swiperVariants}
      >
        <Box
          sx={{
            mx: "auto",
            position: "relative",
          }}
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {helpItems.map((item, index) => (
              <SwiperSlide key={index}>
                <HelpCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
}
