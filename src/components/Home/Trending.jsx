import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { trending } from "../../data";

const Trending = () => {
  const productinfo = trending;
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
              <Box key={index} width="270px" boxShadow="#31208A">
                <Grid container>
                  <Grid item xs={3}>
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
