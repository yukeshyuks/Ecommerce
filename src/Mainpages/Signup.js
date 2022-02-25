/* eslint-disable no-unused-vars */
import React, { useState } from "react";

/* material UI imports */

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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

/*Copyright function returns the copyright details*/
function Copyright(props) {
  return (
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

const theme = createTheme();

/*Login function saves the username and password in the database using POST Method*/
export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function signUp() {
    let item = { email, username, password };
    console.warn(item);

    let result = await fetch("http://127.0.0.1:8000/api/v1/users/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("results", result);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = "/login";
  };

  return (
    //  ThemeProvider component is imported from the material UI
    <ThemeProvider theme={theme}>
      {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js" */}
      <Navbar />
      <Grid
        justifyContent="center"
        container
        component="main"
        sx={{ height: "100vh" }}
      >
        {/* contains the whole sigup buttons*/}

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
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/*             
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1">
                Enter your details
              </Typography>
            </Box> */}

              {/* all the details of the signup page*/}
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phno"
                label="Mobile Number"
                name="phno"
                type="tel"
                autoComplete="phno"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              /> */}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
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

              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="cpassword"
              /> */}

              <Button
                onClick={signUp}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Waves />
      <Footer />
    </ThemeProvider>
  );
}
