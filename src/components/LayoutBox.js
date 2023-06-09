import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logoUdeA from "../assets/logos/UdeA+simplificado+®-02.png";

export const LayoutBox = () => {
  return (
    <Box
      
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={logoUdeA} width={"50%"} height={"auto"} />
      <Typography component={"h1"} variant="h5">
        Ingresar
      </Typography>
    </Box>
  );
};
