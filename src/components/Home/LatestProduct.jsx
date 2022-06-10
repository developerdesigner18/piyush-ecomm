import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { latestProduct } from "../../data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const LatestProduct = () => {
  const product = latestProduct;
  const group = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  let navigate = useNavigate();
  const { cart, setCart } = useContext(Cart);

  const productinfoHandler = (product, index) => {
    navigate("/productdetail", { state: { index: index, product: product } });
  };

  const addtocartHandler = (product, index, e) => {
    e.stopPropagation();
    console.log(product);
    setCart([...cart, product]);
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "42px",
          mt: "20px",
        }}
      >
        Latest Products
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "96%",
          margin: "3%",
        }}
      >
        {group.map((group, index) => (
          <div
            key={index}
            style={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: 18,
              color: "#151875",
              margin: "10px",
            }}
          >
            {group}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "96%",
          margin: "3%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          xs={12}
          item
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {product.map((product, index) => {
            return (
              <Box
                key={index}
                sx={{
                  background: "#F2F0FF",
                  m: 1,
                  display: "flex",
                  flexDirection: "row",
                  // width: {
                  //   xs: "100%",
                  //   sm: "auto",
                  //   lg: "auto",
                  //   lg: "auto",
                  //   xl: "auto",
                  // },
                }}
                onClick={() => productinfoHandler(product, index)}
              >
                <Grid container>
                  <Grid item tem md={4} xs={12} sm={4} lg={4} xl={4}>
                    <div style={{ display: "flex" }}>
                      <FavoriteBorderIcon sx={{ mr: 1 }} />
                      <ShoppingCartIcon
                        onClick={(e) => addtocartHandler(product, index, e)}
                        sx={{ mr: 1 }}
                      />
                      <ZoomInIcon />
                    </div>

                    <img
                      src={product.img}
                      alt="logo"
                      height="200px"
                      width="200px"
                      justifyContent="center"
                      alignItems="center"
                    />
                    <Paper sx={{ width: { xs: "100%", sm: "200px" } }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "#151875",
                          }}
                        >
                          {product.title}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Josefin Sans",
                              fontSize: 14,
                              color: "#151875",
                              mr: 1,
                            }}
                          >
                            {product.Price}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Josefin Sans",
                              fontSize: 14,
                              textDecoration: "line-through",
                              color: "#FB2448",
                            }}
                          >
                            {product.newprice}
                          </Typography>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default LatestProduct;
