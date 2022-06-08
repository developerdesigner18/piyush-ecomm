import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { featureProduct } from "../../data";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";
const FeatureProduct = () => {
  const productinfo = featureProduct;

  const { cart, setCart } = useContext(Cart);

  let navigate = useNavigate();
  
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
        Featured Products
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
                onClick={() => productinfoHandler(product, index)}
              >
                <Grid container>
                  <Grid item md={3} xs={6} sm={4}>
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
                          color: "#FB2E86",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#151875",
                        }}
                      >
                        Code:{product.code}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#151875",
                        }}
                      >
                        {product.Price}
                      </Typography>
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

export default FeatureProduct;
