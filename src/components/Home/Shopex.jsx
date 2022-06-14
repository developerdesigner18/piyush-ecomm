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
      <div
        style={{
          width: "100%",
          // margin: "2%",
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
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          {product.map((product, index) => {
            return (
              <Box
                key={index}
                sx={{
                  m: 1,
                  width: {
                    xs: "100%",
                    sm: "auto",
                    lg: "auto",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    sm={2}
                    lg={2}
                    xl={3}
                    spacing={2}
                    sx={{ display: "grid" }}
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
                    <Paper sx={{ width: { xs: "100%", sm: "200px" } }}>
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
      </div>
    </>
  );
};
export default ShopexOffer;
