"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Tabs, Tab, Card, Grid } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import test from "@assets/grid/test.jpg";
import test2 from "@assets/grid/test2.jpg";
import test3 from "@assets/grid/test3.jpg";

const experiencesData = [
  {
    category: "Experiencias Tour 1",
    images: [test, test, test, test, test, test],
  },
  {
    category: "Experiencias Tour 2",
    images: [test2, test2, test2, test2, test2, test2],
  },
  {
    category: "Experiencias Tour 3",
    images: [test3, test3, test3, test3, test3, test3],
  },
];

export default function GridExperience() {
  const [selectedTab, setSelectedTab] = useState(0);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const gridInView = useInView(gridRef, { once: true });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        alignContent: "center",
      }}
    >
      {/* Title Animation */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <Typography variant="h2" sx={{ mb: 4 }} className="text-foreground">
          Explora nuestras Experiencias
        </Typography>
      </motion.div>

      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{
          display: "none",
          mb: 4,
          flexWrap: "wrap",
          ".MuiTabs-indicator": { display: "none" },
          ".MuiTab-root": {
            textTransform: "none",
            border: "1px solid #4A9B98",
            borderRadius: "20px",
            px: 2,
            mx: 1,
            color: "#4A9B98",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            "&.Mui-selected": {
              backgroundColor: "#4A9B98",
              color: "white",
            },
          },
        }}
      >
        {experiencesData.map((experience, index) => (
          <Tab key={index} label={experience.category} />
        ))}
      </Tabs>

      {/* Grid Animation */}
      <motion.div
        ref={gridRef}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab} // Unique key to trigger re-render
            initial={{ opacity: 0, y: 20 }} // Initial state when entering
            animate={{ opacity: 1, y: 0 }} // Final visible state
            exit={{ opacity: 0, y: -20 }} // Exit animation state
            transition={{ duration: 0.3 }} // Smooth animation timing
          >
            {/* Swiper for Mobile */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Swiper
                modules={[Pagination]} // Enable pagination
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                loop
                autoplay={{ delay: 5000 }}
              >
                {experiencesData[selectedTab].images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: 350,
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Experience Image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
              <style jsx global>{`
                .swiper-pagination-bullet {
                  background-color: #ddd; // Default color for dots
                }
                .swiper-pagination-bullet-active {
                  background-color: white; // Active dot color
                }
              `}</style>
            </Box>

            {/* Grid for Desktop */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Grid container spacing={4}>
                {experiencesData[selectedTab].images.map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: 350,
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Experience Image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Box>
  );
}
