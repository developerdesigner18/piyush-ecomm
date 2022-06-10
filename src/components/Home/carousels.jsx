import { Button, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import styles from "../Home/style.css";
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
        }}
      >
        <div style={{ display: "flex", width: "50%", position: "static" }}>
          <div>
            <img
              src="/blogpage/lamp.png"
              alt="lamp"
              justifyContent="flex-start"
            />
          </div>

          <div>
            <Typography sx={{ color: "deeppink" }}>
              Best Furniture for your Castle...
            </Typography>
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                fontSize: "auto",
                letterSpacing: "1.5%",
                color: "000000",
                fontWeight: "Bold",
              }}
            >
              New Furniture collection Trends in 2020
            </Typography>
            <Typography>
              lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin years old
            </Typography>
            <Button sx={{ backgroundColor: "deeppink", color: "white" }}>
              Shop Now
            </Button>
          </div>
        </div>

        <div className="styles.img" width="500px">
          {/* <img src="blogpage/sofa.png" height="350px" width="40%" /> */}
        </div>
      </Box>
    </>
  );
};

export default Carousels;
