import { Box, Typography, Button } from "@mui/material";
import { bag } from "../../data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BasicRating from "./rating";
import RelatedProducts from "./RelatedProducts";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { useState } from "react";
import { Cart } from "../../context/cartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const minor = [location.state.product];
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(Cart);

  const addtocartHandler = (data) => {
    navigate("/shop");
    setCart([...cart, data]);
  };

  const incrementHandler = () => {
    const result = quantity + 1;
    setQuantity(result);
  };
  const decrementHandler = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);
    }
  };

  const productdetail = ["Description", "Additional Info", "Reviews", "Video"];
  return (
    <div style={{ width: "90%", margin: "4%" }}>
      <Card
        sx={{
          display: { sx: "block", sm: "flex" },
          marginTop: "100px",
          textAlign: "justify",

          width: "80%",
          marginRight: "10%",
          marginLeft: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {minor.map((img, index) => {
            return (
              <div
                style={{
                  background: "#fec107",
                  marginRight: "10px",

                  alignItems: "center",
                }}
              >
                <img src={img.img} width="300px" height="300px" />
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
                  <div
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",

                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Typography sx={{ marginRight: "10PX" }}>
                        Quantity
                      </Typography>
                      <button
                        onClick={decrementHandler}
                        style={{ height: "30px" }}
                      >
                        -
                      </button>
                      <span style={{ width: "20px", textAlign: "center" }}>
                        {quantity}
                      </span>
                      <button
                        onClick={incrementHandler}
                        style={{ height: "30px" }}
                      >
                        +
                      </button>
                    </div>
                    <Button
                      variant="contained"
                      style={{ color: "white", backgroundColor: "#2196f3" }}
                      onClick={() => addtocartHandler(data)}
                    >
                      Add to Cart
                    </Button>
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
      </Card> 

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
          <Typography
            sx={{
              color: "#A9ACC6",
              textAlign: "center",
              marginRight: "100PX",
              marginLeft: "100px",
            }}
          >
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
