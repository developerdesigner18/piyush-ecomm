import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { trending } from "../../data";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";
const Trending = () => {
  const productinfo = trending;
  let navigate = useNavigate();
  const { cart, setCart } = useContext(Cart);

  const productinfoHandler = (product, index) => {
    navigate("/productdetail", { state: { index: index, product: product } });
  };

  const addtocartHandler = (product, index, e) => {
    e.stopPropagation();

    setCart([...cart, product]);
  };
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#1A0B5B", fontFamily: "Josefin Sans", fontSize: "42px" }}
      >
        Trending Products
      </Typography>
      <div
        style={{
          width: "96%",
          margin: "2%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid
          container
          xs={12}
          item
          spacing={1}
          sx={{
            display: { md: "flex", sm: "flex", lg: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          {productinfo.map((product, index) => {
            return (
              <Box
                key={index}
                sx={{
                  background: "#F2F0FF",
                  m: 1,
                  width: {
                    xs: "100%",
                    sm: "auto",
                    lg: "auto",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
                onClick={() => productinfoHandler(product, index)}
                boxShadow="#31208A"
              >
                <Grid container>
                  <Grid item md={3} xs={12} sm={3} lg={3} xl={3}>
                    <div style={{ display: "flex" }}>
                      <FavoriteBorderIcon sx={{ mr: 1 }} />
                      <ShoppingCartIcon
                        onClick={(e) => addtocartHandler(product, index, e)}
                        sx={{ mr: 1 }}
                      />
                    </div>
                    <img
                      src={product.img}
                      alt="logo"
                      height="178px"
                      width="178px"
                    />
                    <Paper sx={{ width: { xs: "100%", sm: "200px" } }}>
                      <Typography
                        sx={{
                          fontFamily: "Lato",
                          fontWeight: 700,
                          fontSize: 18,
                          color: "#151875",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",

                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            color: "#151875",
                            marginRight: "10px",
                          }}
                        >
                          {product.Price}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            color: "#151875 30%",
                            textDecoration: "line-through",
                          }}
                        >
                          {product.newprice}
                        </Typography>
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

export default Trending;
