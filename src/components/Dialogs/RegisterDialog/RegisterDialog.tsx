import React from "react";

import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Dialog from "../Dialog";

type RegisterDialogProps = {
  open: boolean;
  onClose?: () => void;
};

const RegisterDialog: React.FC<RegisterDialogProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("Etunimi on pakollinen")),
      lastName: Yup.string().required(t("Sukunimi on pakollinen")),
      email: Yup.string()
        .email(t("Sähköposti on virheellinen"))
        .required(t("Sähköposti on pakollinen")),
      password: Yup.string()
        .min(8, t("Salasanan on oltava vähintään 8 merkkiä pitkä"))
        .required(t("Salasana on pakollinen")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], t("Salasanat eivät täsmää"))
        .required(t("Vahvista salasana")),
    }),
    onSubmit: (values) => {
      console.log(values);
      // handle form submission here
    },
  });

  return (
    <Dialog title={t("Luo tili")} open={open} onClose={onClose}>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="firstName"
              name="firstName"
              label={t("Etunimi")}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label={t("Sukunimi")}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {t("Sähköpostiosoitteesi toimii jatkossa käyttäjätunnuksenasi")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label={t("Vahvista salasana")}
              type="password"
              id="comfirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              {t("Luo tili")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default RegisterDialog;
