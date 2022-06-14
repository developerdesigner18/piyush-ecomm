import { Typography } from "@mui/material";
import { topCategory } from "../../data";
import { Grid, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";
const TopCategory = () => {
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
        Top Categories
      </Typography>
      <div>
        <Grid
          container
          xs={12}
          item
          spacing={1}
          sx={{
            // display: { md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {topCategory.map((product, index) => {
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
              >
                <Grid container>
                  <Grid item md={6} xs={12} sm={6} lg={6} xl={3}>
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
                    <Paper sx={{ width: { xs: "100%", sm: "200px" } }}>
                      <Typography
                        sx={{
                          fontFamily: "Lato",
                          fontWeight: 700,
                          fontSize: 20,
                          color: "#151875",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 20,
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
      </div>
    </>
  );
};
export default TopCategory;
