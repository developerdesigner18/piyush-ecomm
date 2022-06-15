import { Button, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import style from "./style.css";
const Carousels = () => {
  return (
    <>
      <Box
        sx={{
          width: "96%",
          m: "2%",
          height: "450px",
          background: "#F2F0FF",
          display: "flex",
          justifyContent: { lg: "space-around" },
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              width="100%"
              height="60%"
              src="/blogpage/lamp.png"
              alt="lamp"
              justifyContent="flex-start"
            />
          </div>

          <div
            style={{
              textAlign: "justify",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "deeppink" }}>
              Best Furniture for your Castle...
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Josefin Sans",
                fontSize: "auto",
                letterSpacing: "1.5%",
                color: "000000",
                fontWeight: "Bold",
              }}
            >
              New Furniture collection Trends in 2022
            </Typography>
            <Typography variant="h6">
              lorem Ipsum is not simply random text. Latin years old
            </Typography>
            <Button sx={{ backgroundColor: "deeppink", color: "white" }}>
              Shop Now
            </Button>
          </div>
        </div>

        <div className="img">
          <img src="/blogpage/sofa.png" height="350px" />
        </div>
      </Box>
    </>
  );
};

export default Carousels;
