import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { blog } from "../../data";
const Blog = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "42px",
          m: "20px",
        }}
      >
        Latest Blog
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
          {blog.map((product, index) => {
            return (
              <Box key={index}>
                <Grid container>
                  <Grid item xs={3}>
                    <img
                      src={product.img}
                      alt="logo"
                      height="255px"
                      width="370px"
                    />
                    <Paper sx={{ width: "370px", mb: 30 }}>
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
                        {product.text}
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
      </Container>
    </>
  );
};

export default Blog;
