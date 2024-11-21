"use client";

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import WhiteNavbar from "@components/WhiteNavbar/WhiteNavbar";
import { motion } from "framer-motion";

interface HeaderProps {
  handleDialogOpen: () => void;
}

export default function Header({ handleDialogOpen }: HeaderProps) {
  return (
    <>
      <WhiteNavbar />
      <Box
        component="header"
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url('/assets/header/axolotlHeader.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: { xs: "center", md: "left" },
            color: "white",
            px: { xs: 2, sm: 6, md: 12 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "var(--font-transformasansBold)",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Explora, aprende y <br /> ayuda a preservar <br /> especies en
              peligro.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Grid
              container
              spacing={2}
              sx={{ mt: 4 }}
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems={"center"}
            >
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleDialogOpen} // Abre el diálogo
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderRadius: "30px",
                    px: { xs: 2, md: 4 },
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  ¿Cómo ayudar?
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Descubre cómo puedes ayudar a cuidar de estas especies en
                  peligro.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
