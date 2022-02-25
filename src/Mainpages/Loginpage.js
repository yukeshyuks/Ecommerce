/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

/* material UI imports */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "../component/NavBar/Navbar";
import Footer from "../component/Footer/Footer";
import Waves from "../component/Footer/Waves";

/*loginUser function checks for the authenticate login credential and post request is used to upload the credentials to the database*/
async function loginUser(credentials) {
  return fetch("http://127.0.0.1:8000/api/v1/token/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

/*Copyright function returns the copyright details*/
function Copyright(props) {
  return (
    //returns the copyrights details

    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Flexmarket
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/*Login function checks for the username and password and generates tokens*/
export default function Login({ setToken }) {
  const theme = createTheme();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      password,
      username,
    });
    setToken(token);
    window.location.href = "/";
  };

  return (
    // ThemeProvider component is imported from the material UI
    <ThemeProvider theme={theme}>
      {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js"  */}
      <Navbar />
      <Grid
        justifyContent="center"
        container
        component="main"
        sx={{ height: "100vh" }}
      >
        <Grid
          position="absolute"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {/* Typography component is imported from the material UI */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* <Grid container
              spacing={3}>
              <Grid item
                xs={25}
                md={20}>
                <Button color="info"
                  fullWidth
                  size="large"
                  variant="contained">
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item
                xs={25}
                md={20}>

                  <Button
                  fullWidth
                  color="error"
                  size="large"
                  variant="contained">
                  Login with Google
                </Button>
              </Grid>
            </Grid>  */}
              <Box
                sx={{
                  pb: 1,
                  pt: 3,
                }}
              >
                {/* Email login button */}
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  Login with Email Address
                </Typography>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Waves />
      {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
      <Footer />
    </ThemeProvider>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
