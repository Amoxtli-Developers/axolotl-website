"use client";

import React from "react";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import tertiaryLogo from "@assets/tertiaryLogo.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 6 },
        alignContent: "center",
        mt: { xs: "32px", md: "40px" },
      }}
    >
      <Grid container spacing={4}>
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ justifyContent: { xs: "center", md: "left" }, display: "flex" }}
        >
          <Image
            src={tertiaryLogo}
            alt="Reptilario y Ajolotario Quetzal Logo"
            width={150}
            height={150}
          />
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={12} md={4} textAlign={"center"}>
          <Typography variant="h6" sx={{ mb: 2, color: "#4A9B98" }}>
            Síguenos
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <Link
              href="https://www.google.com/maps/place/Reptilario+Quetzal/@19.3203322,-99.27102,36062m/data=!3m1!1e3!4m6!3m5!1s0x85ce0100190273fb:0xcfd9cb61cdd8ad60!8m2!3d19.2749484!4d-99.1016485!16s%2Fg%2F11w3bs3568?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              aria-label="Google"
              underline="none"
            >
              <GoogleIcon sx={{ fontSize: 36, color: "#6BA59B" }} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61558182304087"
              target="_blank"
              aria-label="Facebook"
              underline="none"
            >
              <FacebookIcon sx={{ fontSize: 36, color: "#6BA59B" }} />
            </Link>
            <Link
              href="https://www.instagram.com/reptilarioquetzal/"
              target="_blank"
              aria-label="Instagram"
              underline="none"
            >
              <InstagramIcon sx={{ fontSize: 36, color: "#6BA59B" }} />
            </Link>
          </Box>
          <Typography variant="body2" sx={{ color: "#4A9B98" }}>
            Guardianes de la biodiversidad, <br />
            enraizados en la herencia de Xochimilco.
          </Typography>
        </Grid>

        {/* Call to Action Section */}
        <Grid item xs={12} sm={12} md={4} textAlign={"center"}>
          <Typography variant="h6" sx={{ mb: 2, color: "#4A9B98" }}>
            ¿Cuál es tu siguiente paso?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              href="https://amoxtli.tech/"
              target="_blank"
              variant="contained"
              sx={{
                backgroundColor: "#4A9B98",
                borderRadius: "30px",
                width: "50%",
                "&:hover": {
                  backgroundColor: "#4A9B98",
                },
              }}
            >
              Tienda Amoxtli
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4A9B98",
                borderRadius: "30px",
                width: "50%",
                "&:hover": {
                  backgroundColor: "#4A9B98",
                },
              }}
            >
              Ser voluntario
            </Button>
            <Button
              href="https://wa.link/7y8yno"
              target="_blank"
              variant="contained"
              sx={{
                backgroundColor: "#4A9B98",
                borderRadius: "30px",
                width: "50%",
                "&:hover": {
                  backgroundColor: "#4A9B98",
                },
              }}
            >
              Reservar Tour
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: "#A0A0A0",
          textAlign: "center",
        }}
      >
        <Typography fontSize={"12px"}>Derechos reservados © 2024</Typography>
        <Typography fontSize={"12px"}>
          Desarrollado por{" "}
          <Link
            href="https://www.amoxtli.tech/"
            underline="none"
            sx={{ color: "#4A9B98", fontWeight: "bold" }}
            target="_blank"
          >
            Amoxtli Web Developers
          </Link>
        </Typography>
        <Typography fontSize={"12px"}>
          <Link href="#" underline="none" sx={{ color: "#A0A0A0" }}>
            Términos y condiciones
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
