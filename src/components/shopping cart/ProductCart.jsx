import { featureProduct } from "../../data";
import {
  Typography,
  Grid,
  Paper,
  Container,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ProductCart = () => {
  const productinfo = featureProduct;
  const cartTitle = ["Product", "Price", "Quantity", "Total"];
  const [quantity, setQuantity] = useState(1);

  const quantitychangeHandler = (e) => {
    // const { name, value } = e.target;
    // setQuantity({
    //   ...quantity,
    //   [name]: value,
    // });
    setQuantity(e.target.value);
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#1A0B5B", fontFamily: "Josefin Sans", fontSize: "42px" }}
      >
        Shopping Cart
      </Typography>
      <div
        style={{
          display: "flex",

          // justifyContent: "space-evenly",
        }}
      >
        {cartTitle.map((title, index) => {
          return (
            <Typography sx={{ marginLeft: "140px", mb: 2 }}>{title}</Typography>
          );
        })}
      </div>

      <Container>
        <Grid
          container
          xs={12}
          item
          spacing={1}
          sx={{
            display: { md: "block" },
            flexDirection: "row",
            justifyContent: "space-between",
            textDecoration: "none",
          }}
        >
          {productinfo.map((product, index) => {
            return (
              <Box
                key={index}
                width="auto"
                sx={{
                  display: "flex",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={3}
                    xs={6}
                    sm={4}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.img}
                      alt="logo"
                      height="87px"
                      width="83px"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#000000",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#A1A8C1",
                        }}
                      >
                        Color:Brown
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#A1A8C1",
                        }}
                      >
                        Size:Xl
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <div style={{}}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: 14,
                      color: "#A1A8C1",
                    }}
                  >
                    {product.Price}
                  </Typography>
                  <TextField
                    key={product.id}
                    onChange={quantitychangeHandler}
                    value={quantity}
                    name={index}
                    type="number"
                    // style={{ width: "51px", height: "15px" }}
                  />
                  <Typography color="black">
                    {parseInt(product.Price) * parseInt(quantity)}
                    {console.log(parseInt(product.Price) * parseInt(quantity))}
                  </Typography>
                </div>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default ProductCart;
