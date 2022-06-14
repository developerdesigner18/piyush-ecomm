import { Button, Grid, makeStyles, TextField, Typography } from "@mui/material";
import { Box, Container, height } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const signinHandler = () => {
    navigate("/register");
  };
  return (
    <footer style={{ marginbottom: 0, background: "#EEEFFB" }}>
      <Box>
        <Container maxwidth="">
          <Grid
            item
            xs={12}
            sm={3}
            Container
            spacing={5}
            sx={{
              display: { md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              textDecoration: "none",
            }}
          >
            <Grid item xs={12} sm={3}>
              <Box
                style={{
                  fontFamily: "Josefin Sans",
                  height: "38px",
                  width: { xs: "auto", sm: "auto", md: "auto" },
                }}
              >
                <Typography variant="h4">Hekto</Typography>
              </Box>
              <Box sx={{ xs: "auto", sm: "auto", md: "auto" }}>
                <TextField
                  sx={{ width: { xs: "auto", sm: "auto", md: "auto" } }}
                  placeholder="Enter your email address"
                />
                <Button
                  onClick={signinHandler}
                  sx={{
                    background: "deeppink",
                    height: "54px",
                    width: { xs: "auto", sm: "auto", md: "auto" },
                    color: "white",
                  }}
                >
                  SignUp
                </Button>
              </Box>
              <Box sx={{ color: "#8A8FB9" }}>
                <p>Contact Info:- </p>
                <p>Princess Road london xyz</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>Categories</Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Labtops & computer
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Camera & Photagraphy
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Smart Phones & Tablets
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Video Games & Consoles
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  WaterProof Headphones
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>Customer Care</Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  My Account
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Discount
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Returns
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Order History
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Order Tracking
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>Pages</Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to="/blog"
                >
                  Blog
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Browse the Shop
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Category
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Pre Built-pages
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Visual Composer Element
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none", color: "#8A8FB9" }}
                  to=""
                >
                  Woo Commerce Emages
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box>© Webecy - All Rights Reserved</Box>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
