"use client";
import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import mainLogo from "@assets/mainLogo.svg";

export default function GreenNavbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10,
        marginBottom: "20px",
      }}
      className="navbar-green"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={mainLogo}
          alt="Green Logo"
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
