import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { newsletter } from "../../data";
import { bag } from "../../data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BasicRating from "./rating";
import RelatedProducts from "./RelatedProducts";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ProductDetails = () => {
  const location = useLocation();
  const major = bag[0].major;
  const navigate = useNavigate();
  const minor = [location.state.product];

  const addtocartHandler = (product) => {
    navigate("/shop", { state: { product: product } });
  };

  const productdetail = ["Description", "Additional Info", "Reviews", "Video"];
  return (
    <div>
      {/* <Box>
        <Container>
          <div display="flex" flexDirection="row">
            <div display="flex" flexDirection="column">
              {minor.map((img, index) => {
                return (
                  <Box>
                    <div>
                      <img src={img.img} width="151px" height="155px" />
                    </div>
                  </Box>
                );
              })}
            </div>
            {minor.map((img, index) => {
              return (
                <div display="flex">
                  <Box
                    sx={{
                      width: "400px",
                      flexdirection: "column",
                      justifycontent: "center",
                      alignitems: "flex-start",
                      margin: "auto",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "#151875",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#151875",
                      }}
                    >
                      {img.title}
                    </Typography>
                    <BasicRating />
                    <div>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          textDecoration: "line-through",
                          color: "#FB2448",
                        }}
                      >
                        {img.Price}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "block",
                        justifycontent: "center",
                        alignitems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                        }}
                      >
                        {img.text}
                      </Typography>
                      <div display="inline-flex">
                        <Button
                          sx={{ color: "#151875", fontSize: "16px" }}
                          onClick={() => addtocartHandler(img)}
                        >
                          Add To Cart
                        </Button>
                        <FavoriteBorderIcon
                          sx={{ width: "15px", height: "13.85px" }}
                        />
                      </div>

                      <Typography sx={{ color: "#151875" }}>
                        Categories
                      </Typography>
                      <Typography sx={{ color: "#151875" }}>Tags</Typography>
                      <Typography sx={{ color: "#151875" }}>Share</Typography>
                    </div>
                  </Box>
                </div>
              );
            })}
          </div>
        </Container>
      </Box> */}
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          textAlign: "justify",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {minor.map((img, index) => {
            return (
              <div>
                <img src={img.img} width="200px" height="200px" />
              </div>
            );
          })}
        </div>
        <div>
          {minor.map((data, index) => {
            return (
              <>
                <div sx={{ maxWidth: "auto" }}>
                  <Typography
                    sx={{
                      color: "#0D134E",
                      fontFamily: "Josefin Sans",
                      fontSize: "36px",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <BasicRating />
                  <div style={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "10px" }}>
                      {data.Price}
                    </Typography>
                    <Typography sx={{ color: "red" }}>253</Typography>
                  </div>
                  <Typography>Color</Typography>
                  <Typography>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </Typography>
                  <div sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Button>Add to Cart</Button>
                    <FavoriteBorderIcon />
                  </div>

                  <Typography>Categories</Typography>
                  <Typography>Tags</Typography>
                  <Typography>Share</Typography>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Box sx={{ bgcolor: "#F9F8FE" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "100px",
            fontSize: "24px",
            fontfamily: "Josefin Sans",
          }}
        >
          {productdetail.map((details, index) => {
            return (
              <Typography key={index} sx={{ color: "#151875" }}>
                {details}
              </Typography>
            );
          })}
        </div>
        <div>
          <Typography sx={{ color: "#151875", mt: 8 }}>
            Various Templates
          </Typography>
          <Typography sx={{ textIndent: "100px", color: "#A9ACC6" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
          </Typography>
        </div>
        <div>
          <Typography sx={{ color: "#151875", mt: 3 }}>
            {" "}
            More Details
          </Typography>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography sx={{ color: "#A9ACC6" }}>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography sx={{ color: "#A9ACC6" }}>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography sx={{ color: "#A9ACC6" }}>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography sx={{ color: "#A9ACC6" }}>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
        </div>
      </Box>
      <RelatedProducts />
      {/* <Box
        style={{
          margin: "30px",
          display: "grid",
          placeItems: "center",
          marginTop: "150px",
          marginBottom: "150px",
        }}
      >
        <img src={newsletter.img2} height="50px" width="auto" />
      </Box> */}
    </div>
  );
};
export default ProductDetails;
