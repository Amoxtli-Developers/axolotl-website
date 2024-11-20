"use client";
import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import whiteLogo from "@assets/header/whiteLogo.svg";

export default function WhiteNavbar() {
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "absolute", // Set the navbar as absolute to make it scrollable
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10,
      }}
      className="navbar-white"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={whiteLogo}
          alt="White Logo"
          width={180}
          height={38}
          style={{
            marginTop: "20px",
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
