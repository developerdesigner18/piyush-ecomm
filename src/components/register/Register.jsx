import { Button, TextField, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
          Register
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
          Please register your account details below
        </Typography>
        <TextField
          sx={{ width: "432px", height: "52px", mb: "20px" }}
          placeholder="Full Name"
        />
        <TextField
          sx={{ width: "432px", height: "52px" }}
          placeholder="Email"
        />
        <TextField
          sx={{ width: "432px", height: "52px", mt: "20px", mb: "20px" }}
          placeholder="Password"
        />

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
          Register
        </Button>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Already have account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </>
  );
};
export default RegisterPage;
