import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import loginImage from "../assets/images/loginImage.jpg";
import RegisterDialog from "../components/Dialogs/RegisterDialog";

import { useDispatch } from "react-redux";
import { login } from "../features/auth/authActions";
import { AppDispatch } from "../store/store";

export default function LoginView() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("Sähköposti on virheellinen"))
        .required(t("Sähköposti on pakollinen")),
      password: Yup.string().required(t("Salasana on pakollinen")),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h2">
              {t("Fantasy League Maker")}
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: theme.palette.success.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("Kirjaudu sisään")}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("Sähköposti")}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t("Salasana")}
                type="password"
                id="password"
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
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
              >
                {t("Kirjaudu")}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {t("Unohditko salasanasi")}?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => setDialogOpen(true)} variant="body2">
                    {"Eikö sinulla ole tiliä? Luo tili tästä"}.
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <RegisterDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
