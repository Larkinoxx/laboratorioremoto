import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import logoLogin from "../../assets/logos/startup.svg";
import { LayoutBox } from "../../components/LayoutBox";

export const Login = () => {
  const handleLogin = (user, password) => {};

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("common.validations.email")
        .required("common.validations.required"),
      password: Yup.string()
        .min(8, ("common.validations.min", { size: 8 }))
        .required("common.validations.required"),
    }),
    onSubmit: (values) => handleLogin(values.email, values.password),
  });
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${logoLogin})`,
          backgroundRepeat: "no-repeat",
          bgcolor: "rgb(236, 239, 241)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Container component={"main"} maxWidth="xs" sx={{ mt: 6 }}>
          <LayoutBox/>
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
            <Button
              type="submit"
              fullWidth
              /* loading={isLoggingIn} */
              variant="contained"
              sx={{ mt: 3 }}
            >
              Ingresar
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
