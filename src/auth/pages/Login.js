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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const botonTheme = createTheme({
  palette: {
    primary: {
      main: "#70205b",
    },
    error:{
      main:'#ef434d'
    }
  },
  typography:{
    fontFamily:'Roboto',
    fontSize:20
  }
});

export const Login = () => {
  const handleLogin = (user, password) => {};

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo no válido")
        .required("Debe ingresar un correo"),
      password: Yup.string()
        .min(8, "La contraseña debe poseer minimo 8 caracteres")
        .required("Ingrese una contraseña"),
    }),
    onSubmit: (values) => handleLogin(values.email, values.password),
  });
  return (
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
          padding: "2%",
        }}
        /* display={'flex'}
        alignItems={'center'}
        direction={'row-reverse'} */
        /* sx={{
          backgroundImage: `url(${logoLogin})`,
          backgroundRepeat: "no-repeat",
          bgcolor: "rgb(236, 239, 241)",
          backgroundSize:'cover',
          backgroundPosition: "center",
          maxWidth:'50%',
          height:'auto'
        }} */
      >
        <LayoutBox imagen={logoLogin} width={"50%"} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        sx={{ bgcolor: "#fffff" }} /* component={Paper} square */
      >
        <Container component={"main"} maxWidth="xs" sx={{ mt: 6 }}>
          <LayoutBox imagen={logoUdeA} width={"100%"} />
          <Typography component={"h1"} variant="h5">
            Ingresar
          </Typography>
          <Box
            component="form"
            marginTop={3}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="email"
              label="Email"
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
              variant="filled"
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <ThemeProvider theme={botonTheme}>
              <Button
                type="submit"
                fullWidth
                /* loading={isLoggingIn} */
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
              >
                Ingresar
              </Button>
            </ThemeProvider>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
