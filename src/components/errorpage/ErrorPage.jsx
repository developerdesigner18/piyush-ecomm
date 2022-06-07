import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Box
        sx={{
          height: "130px",
          width: "100%",
          mb: "50px",
          justifyContent: "center",
          bgcolor: "#F6F5FF",
        }}
      >
        <Typography
          sx={{
            ml: "160px",
            color: "#101750",
            fontSize: "36PX",
            textAlign: "left",
          }}
        >
          404 Not Found
        </Typography>
      </Box>
      <div style={{ marginBottom: "100px" }}>
        <Box sx={{ mt: "50px" }}>
          <img src="/blogpage/Group 197.png" alt="" />
        </Box>
        <Typography
          sx={{
            color: "#152970",
            fontFamily: "Josefin Sans",
            fontSize: "24px",
          }}
        >
          oops! The page you requested was not found!
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: "157px",
            height: "44px",
            bgcolor: "deeppink",
            color: "white",
            textDecoration: "none",
          }}
        >
          <Link to="/" sx={{ textDecoration: "none" }}>
            Back To Home
          </Link>
        </Button>
      </div>
    </>
  );
};
export default ErrorPage;
