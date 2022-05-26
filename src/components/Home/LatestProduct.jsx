import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { latestProduct } from "../../data";
const LatestProduct = () => {
  const product = latestProduct;
  const group = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
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
              margin: "20px",
            }}
          >
            {group}
          </div>
        ))}
      </div>
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
          {product.map((product, index) => {
            return (
              <Box
                key={index}
                sx={{
                  m: "5px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <img
                      src={product.img}
                      alt="logo"
                      height="223px"
                      width="229px"
                      justifyContent="center"
                      alignItems="center"
                    />
                    <Paper sx={{ width: "360px" }}>
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
                            {product.price}
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
      </Container>
    </>
  );
};

export default LatestProduct;
