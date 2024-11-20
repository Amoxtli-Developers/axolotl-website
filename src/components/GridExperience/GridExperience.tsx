"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Grid, Tabs, Tab, Card } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
        height: "100vh",
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
          mb: 4,
          ".MuiTabs-indicator": { display: "none" },
          ".MuiTab-root": {
            textTransform: "none",
            border: "1px solid #4A9B98",
            borderRadius: "20px",
            mx: 1,
            minWidth: "150px",
            color: "#4A9B98",
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
                      sx={{ position: "relative", width: "100%", height: 350 }}
                    >
                      <Image
                        src={typeof image === "string" ? image : image.src}
                        alt={`Experience Image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Box>
  );
}
