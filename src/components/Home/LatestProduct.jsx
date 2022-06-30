import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
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
          margin: "2%",
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

      <Container
        sx={{
          width: { xs: "100%", md: "70%", sm: "80%" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          {product.map((product, index) => (
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              lg={4}
              key={product.id}
              sx={{ alignItems: "center" }}
            >
              <Card
                sx={{
                  width: { xs: "100%", md: "auto", sm: "auto" },
                }}
                onClick={() => productinfoHandler(product, index)}
              >
                <div style={{ background: "#F2F0FF" }}>
                  <div style={{ display: "flex" }}>
                    <FavoriteBorderIcon sx={{ mr: 1 }} />
                    <ShoppingCartIcon
                      onClick={(e) => addtocartHandler(product, index, e)}
                      sx={{ mr: 1 }}
                    />
                  </div>
                  <CardMedia
                    component="img"
                    image={product.img}
                    sx={{
                      width: "auto",
                      height: "200px",
                      display: "block",

                      ml: "auto",
                      mr: "auto",
                    }}
                    alt="green iguana"
                  />
                </div>

                <CardContent
                  sx={{
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LatestProduct;
