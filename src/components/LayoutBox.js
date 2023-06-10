import { Box } from "@mui/material";
import React from "react";


export const LayoutBox = ({imagen,width,alt}) => {
  return (
    <Box
      
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={imagen} width={width} height={"auto"} alt={alt} />
      {/* <Typography component={"h1"} variant="h5">
        Ingresar
      </Typography> */}
    </Box>
  );
};
