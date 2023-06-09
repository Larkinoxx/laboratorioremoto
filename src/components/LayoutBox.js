import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logoUdeA from "../assets/logos/UdeA+simplificado+®-02.png";

export const LayoutBox = () => {
  return (
    <Box
      xs={12}
      sm={8}
      md={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={logoUdeA} width={"100%"} height={"auto"} />
      <Typography component={"h1"} variant="h5">
        Ingresar
      </Typography>
    </Box>
  );
};
