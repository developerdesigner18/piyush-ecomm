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
      <Container>
        <Grid
          container
          xs={12}
          item
          spacing={1}
          sx={{
            display: { md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            textDecoration: "none",
          }}
        >
          {productinfo.map((product, index) => {
            return (
              <Box
                key={index}
                width="270px"
                boxShadow="#31208A"
                onClick={() => productinfoHandler(product, index)}
              >
                <Grid container>
                  <Grid item md={3} xs={12} sm={12}>
                    <FavoriteBorderIcon
                      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    />
                    <ShoppingCartIcon
                      onClick={(e) => addtocartHandler(product, index, e)}
                      sx={{ display: { xs: "none", md: "flex" } }}
                    />
                    <img
                      src={product.img}
                      alt="logo"
                      height="178px"
                      width="178px"
                    />
                    <Paper sx={{ width: "200px" }}>
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
      </Container>
    </>
  );
};

export default Trending;
