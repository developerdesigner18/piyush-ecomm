import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import { bag } from "../../data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductDetails = () => {
  const major = bag[0].major;
  console.log(bag[1].minor, "..............minor category");
  const minor = bag[1].minor;
  const productdetail = ["Description", "Additional Info", "Reviews", "Video"];
  return (
    <div>
      <Paper>
        <Box>
          <Container>
            <Grid item xs={12} display="flex" flexDirection="row">
              <Grid container xs={2} display="flex" flexDirection="column">
                {minor.map((img, index) => {
                  return (
                    <Box>
                      <Grid item xs={3}>
                        <Box>
                          <img src={img.img} width="151px" height="155px" />
                        </Box>
                      </Grid>
                    </Box>
                  );
                })}
              </Grid>
              {major.map((img, index) => {
                return (
                  <Grid item sm={4} display="flex" justifyContent="left">
                    <Box width="375px" height="487px">
                      <img src={img.img} />
                    </Box>
                    <Box sx={{ width: "400px" }}>
                      <Typography
                        sx={{
                          fontFamily: "#151875",
                          fontWeight: 700,
                          fontSize: 18,
                          color: "#151875",
                        }}
                      >
                        {img.title}
                      </Typography>
                      <div>
                        <CircleIcon
                          sx={{ color: "#DE9034", fontSize: "small" }}
                        />
                        <CircleIcon
                          sx={{ color: "#EC42A2", fontSize: "small" }}
                        />
                        <CircleIcon
                          sx={{ color: "#8568FF", fontSize: "small" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          margin: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            marginRight: "10px",
                            color: "#151875",
                          }}
                        >
                          {img.newprice}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            textDecoration: "line-through",
                            color: "#FB2448",
                          }}
                        >
                          {img.Price}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                          }}
                        >
                          {img.text}
                        </Typography>
                        <div display="inline-flex">
                          <Button sx={{ color: "#151875", fontSize: "16px" }}>
                            Add To Cart
                          </Button>
                          <FavoriteBorderIcon
                            sx={{ width: "15px", height: "13.85px" }}
                          />
                        </div>

                        <Typography sx={{ color: "#151875" }}>
                          Categories
                        </Typography>
                        <Typography sx={{ color: "#151875" }}>Tags</Typography>
                        <Typography sx={{ color: "#151875" }}>Share</Typography>
                      </div>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Paper>
      <Box sx={{ bgcolor: "#F9F8FE" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
            fontSize: "24px",
            fontfamily: "Josefin Sans",
          }}
        >
          {productdetail.map((details, index) => {
            return (
              <Typography key={index} sx={{ color: "#151875" }}>
                {details}
              </Typography>
            );
          })}
        </div>
        <div>
          <Typography sx={{ color: "#151875", mt: 8 }}>
            Various Templates
          </Typography>
          <Typography sx={{ textIndent: "100px" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
          </Typography>
        </div>
        <div>
          <Typography sx={{ color: "#151875", mt: 3 }}>
            {" "}
            More Details
          </Typography>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ArrowForwardIcon />
            <Typography>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default ProductDetails;