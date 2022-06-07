import { featureProduct } from "../../data";
import { Typography, Grid, Container, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { textAlign } from "@mui/system";

const ProductCart = () => {
  const productinfo = featureProduct;
  const cartTitle = ["Product", "Price", "Quantity", "Total"];
  const [quantity, setQuantity] = useState([]);
  const [getid, setgetid] = useState([]);
  const [temp, settemp] = useState([]);
  console.log(getid);
  const quantitychangeHandler = (id, e) => {
    let temp = [...quantity];
    temp.map((t) => {
      if (t.id == id) t.quantity = parseInt(e.target.value);
    });
    setQuantity(temp);
  };

  useEffect(() => {
    let temp = [];
    productinfo.map((t) => {
      temp.push({ id: t.id, quantity: 0 });
    });
    setQuantity(temp);
  }, []);

  console.log("first : ", quantity);

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
            display: "block",
          }}
        >
          {productinfo.map((product, index) => {
            return (
              <>
                <div style={{}}>
                  <Box
                    key={index}
                    width="auto"
                    // sx={{
                    //   display: "block",
                    //   flexDirection: "column",
                    //   // marginLeft: "140px",
                    // }}
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
                  </Box>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Josefin Sans",
                        fontSize: 14,
                        color: "#A1A8C1",
                      }}
                    >
                      {product.Price}
                    </Typography>
                    <input
                      key={product.id}
                      onChange={(e) => quantitychangeHandler(product.id, e)}
                      value={
                        quantity?.find((x) => x?.id == product?.id)?.quantity
                      }
                      name={index}
                      type="number"
                      style={{ width: "51px", height: "15px" }}
                    />
                    <Typography color="black" key={product.id}>
                      {parseInt(product.Price) *
                        quantity?.find((x) => x?.id == product?.id)?.quantity}
                    </Typography>
                  </div>
                </div>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default ProductCart;
