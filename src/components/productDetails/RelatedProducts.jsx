import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { RelatedProduct } from "../../data";
import BasicRating from "./rating";

const RelatedProducts = () => {
  const productinfo = RelatedProduct;
  console.log(productinfo);
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "42px",
          mt: "150px",
          mb: "50px",
        }}
      >
        Related Products
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
              <Box key={index} width="270px">
                <Grid container>
                  <Grid item md={3} xs={6} sm={4}>
                    <img
                      src={product.img}
                      alt="logo"
                      height="340px"
                      width="270px"
                    />
                    <Paper sx={{ width: "270px" }}>
                      <div style={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontFamily: "Lato",
                            fontWeight: 700,
                            fontSize: 18,
                            color: "#FB2E86",
                            ml: 1,
                          }}
                        >
                          {product.title}
                        </Typography>
                        <BasicRating />
                      </div>

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
export default RelatedProducts;
