import { Box, Button, Typography } from "@mui/material";
import ShopexOffer from "../Home/Shopex";
import { shopexOffer } from "../../data";

const About = ({ title, product }) => {
  const products = shopexOffer;

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
          {" "}
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          ml: "150px",
          mr: "150px",
        }}
      >
        <div style={{ marginRight: "30px" }}>
          <img src="/blog/Group 73.png" width="570px" height="409px" />
        </div>

        <div width="550px" alignItems="left">
          <Typography
            sx={{
              textAlign: "left",
              color: "#151875",
              fontSize: "36px",
              fontFamily: "Josefin Sans",
            }}
          >
            Know About Our Ecomerce Business, History
          </Typography>
          <Typography
            sx={{
              color: "#8A8FB9",
              fontFamily: "Lato",
              fontWeight: "600px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
          <Button
            sx={{
              bgcolor: "deeppink",
              color: "white",
              width: "144px",
              height: "44px",
            }}
          >
            Contact us
          </Button>
        </div>
      </Box>
      <div style={{ marginBottom: "100px" }}>
        <ShopexOffer title="Our Features" product={products} />
      </div>
    </>
  );
};

export default About;
