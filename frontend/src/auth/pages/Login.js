import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import logoLogin from "../../assets/logos/logosimbolo-vertical-negro-png.png";
import logoUdeA from "../../assets/logos/UdeA+simplificado+®-02.png";
import { LayoutBox } from "../../components/LayoutBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { patron as emailFormat} from "../utils/RegEx";

const botonTheme = createTheme({
  palette: {
    primary: {
      main: "#70205b",
    },
    error: {
      main: "#ef434d",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

export const Login = () => {
  const handleLogin = (user, password) => {
    console.log(user);
    console.log(password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(emailFormat,'Email inválido')
        .required("Debe ingresar un correo válido"),
      password: Yup.string()
        .min(8, "La contraseña debe poseer minimo 8 caracteres")
        .max(20,'La contraseña debe poseer minimo 20 caracteres')
        .required("Debe ingresar una contraseña"),
    }),
    onSubmit: (values) => handleLogin(values.email, values.password),
  });
  return (
    <ThemeProvider theme={botonTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          spacing={2}
          /* component={Paper}
        square */
          display={"flex"}
          alignItems={"center"}
          sx={{
            bgcolor: "rgb(236, 239, 241)",
            padding: "5%",
          }}
        >
          <LayoutBox imagen={logoLogin} width={"50%"} alt="logoUdeA" />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{ bgcolor: "#fffff", mb: 5 }} /* component={Paper} square */
        >
          <Container component={"main"} maxWidth="xs" sx={{ mt: 6 }}>
            <LayoutBox imagen={logoUdeA} width={"50%"} alt="logoUdeA" />
            <Typography component={"h1"} variant="h5">
              Laboratorio Remoto de Prácticas
            </Typography>
            <Box
              component="form"
              marginTop={3}
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                autoFocus
                /* disabled={isLoggingIn} */
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                /* disabled={isLoggingIn} */
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                type="submit"
                fullWidth
                /* loading={isLoggingIn} */
                variant="contained"
                size="large"
                sx={{ mt: 3, padding:2}}
                style={{
                  borderRadius: 20,
                }}
              >
                Ingresar
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
