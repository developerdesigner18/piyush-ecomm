import { Label } from "@mui/icons-material";
import { Button, TextField, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "544px",
          height: "474px",
          mt: "100px",
          justifyContent: "center",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Josefin Sans",
            fontSize: "32px",
          }}
        >
          Login
        </Typography>
        <Typography
          sx={{
            color: "#9096B2",
            fontFamily: "Lato",
            fontWeight: "400px",
            size: "17px",
            mt: "20px",
            mb: "30px",
          }}
        >
          Please login using account details below
        </Typography>
        <TextField
          sx={{ width: "432px", height: "52px" }}
          placeholder="Email"
        />
        <TextField
          sx={{ width: "432px", height: "52px", mt: "20px", mb: "20px" }}
          placeholder="Password"
        />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Forget Your password?
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "432px",
            height: "47px",
            bgcolor: "#FB2E86",
            color: "white",
            mt: "20px",
            mb: "20px",
          }}
        >
          Sign In
        </Button>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Dont have account?<Link to="/register">Create account</Link>
        </Typography>
      </Box>
    </>
  );
};
export default LoginPage;
