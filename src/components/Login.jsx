import { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { loginUser } from "../redux/auth/authOperations";
import Notification from "./Notification";
import { theme } from "../common/theme";

export default function Login() {
  const dispatch = useDispatch();

  const initialAuthValues = {
    email: "",
    password: "",
    showPassword: false,
  };

  const [authValues, setAuthValues] = useState(initialAuthValues);
  const [isNotValid, setIsNotValid] = useState(false);

  const userCredentials = {
    email: authValues.email,
    password: authValues.password,
  };
  const canLogin =
    userCredentials.email !== "" && userCredentials.password !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (canLogin) {
      setIsNotValid(false);
      dispatch(loginUser(userCredentials));
    }
  };

  const handleChange = (prop) => (event) => {
    setIsNotValid(false);
    setAuthValues({ ...authValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setAuthValues({
      ...authValues,
      showPassword: !authValues.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="dense"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={authValues.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange("email")}
            error={isNotValid}
            helperText={isNotValid ? "Enter email" : ""}
          />
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel
              htmlFor="password"
              sx={{ color: isNotValid && theme.palette.error.main }}
            >
              Password *
            </InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={authValues.showPassword ? "text" : "password"}
              value={authValues.password}
              onChange={handleChange("password")}
              error={isNotValid}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {authValues.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {isNotValid && (
              <Notification
                message="Enter password"
                color={theme.palette.error.main}
                fontSize="15px"
              />
            )}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!canLogin}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <NavLink to="/register" className="link">
                <Typography
                  variant="body2"
                  sx={{ color: "primary.main", textDecoration: "underline" }}
                >
                  Don't have an account? Sign Up
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
