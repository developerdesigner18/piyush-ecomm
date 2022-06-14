import {
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { featureProduct } from "../../data";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
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
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: { xs: "30px", sm: "42px", md: "42px", xl: "42px" },
        }}
      >
        Featured Products
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
            alignItems: "center",
            textDecoration: "none",
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
              >
                <Grid container>
                  <Grid item md={2} xs={12} sm={2} lg={3} xl={3}>
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
                    />

                    <Paper sx={{ width: { xs: "100%", sm: "200px" } }}>
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
      </div>
    </>
  );
};

export default FeatureProduct;
