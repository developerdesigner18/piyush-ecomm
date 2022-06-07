import { Grid, Paper, Typography, Container, Box } from "@mui/material";
const ShopexOffer = ({ title, product }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "42px",
          m: 5,
        }}
      >
        {title}
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
            alignItems: "center",
          }}
        >
          {product.map((product, index) => {
            return (
              <Box key={index} width="270px">
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{ display: "grid", placeItems: "center" }}
                  >
                    <img
                      src={product.img}
                      alt="logo"
                      height="65px"
                      width="65px"
                      style={{
                        margin: "0 auto",
                      }}
                    />
                    <Paper sx={{ width: "200px" }}>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontWeight: 600,
                          fontSize: "22px",
                          color: "#151875",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Lato",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#1A0B5B 30%",
                        }}
                      >
                        {product.text}
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
export default ShopexOffer;
