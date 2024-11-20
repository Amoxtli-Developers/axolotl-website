"use client";

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

type HelpCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HelpCard: React.FC<HelpCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        borderRadius: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        height: "100%",
        width: "100%",
        marginBottom: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          px: { xs: "50px", md: "20px", lg: "60px" },
          py: { xs: "30px", md: "20px", lg: "40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            mb: 3,
            fontSize: "40px",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
          textAlign={"left"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
          textAlign={"left"}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HelpCard;
