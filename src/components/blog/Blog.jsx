import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography, Grid, Container } from "@mui/material";
import { blogpage } from "../../data";
import { useState } from "react";
import style from "../blog/blog.css";
const Blog = () => {
  const bloginfo = blogpage;
  const [open, setOpen] = useState();
  const [read, setRead] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth() + 1];
  let year = d.getFullYear();
  let date = d.getDate();
  const readonly = (id) => {
    const blogs = [...bloginfo];
    blogs.map((blog) => {
      if (blog.id === id) {
        setRead((prev) => !prev);
        setOpen(blog.id);
      }
    });
  };
  return (
    <>
      <Box
        sx={{
          height: "100px",
          width: "100%",
          mb: "50px",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            alignItems: "center",
            justifyContent: "center",
            m: "auto",
            color: "#101750",
            fontSize: "36PX",
          }}
        >
          {" "}
          Blog Page
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          //   xs={12}
          item
          spacing={1}
          sx={{
            // display: { md: "flex" },

            justifyContent: "space-between",
            textDecoration: "none",
          }}
        >
          {bloginfo.map((product, index) => {
            return (
              <Box key={index} sx={{ width: "870px" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <img
                      src={product.img}
                      alt="logo"
                      height="auto"
                      width="100%"
                    />
                    <Box>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <Typography
                          sx={{
                            marginRight: "30PX",
                            bgcolor: "#FFE7F9",
                            width: "160px",
                            height: "23px",
                          }}
                        >
                          {product.name}
                        </Typography>
                        <CalendarMonthIcon
                          sx={{
                            width: "11px",
                            height: "11px",
                            color: "#FFA454",
                            justifyContent: "center",
                            mt: "5px",
                            mr: "2px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            color: "#151875 30%",
                            bgcolor: "#FFECE2",
                            width: "127",
                            height: "23px",
                          }}
                        >
                          {date + "  " + month + "," + year}
                        </Typography>
                      </div>
                      <div
                        className="bottom"
                        style={{
                          width: "852",
                          height: "143px",
                          marginTop: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Lato",
                            fontWeight: 700,
                            fontSize: 18,
                            color: "#FB2E86",
                            mb: "20px",
                            textAlign: "left",
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            color: "#151875",
                            textAlign: "left",
                            mb: "20px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Velit facilisis quis auctor pretium ipsum, eu
                          rutrum. Condimentum eu malesuada vitae ultrices in in
                          neque, porta dignissim. Adipiscing purus, cursus
                          vulputate id id dictum a
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Josefin Sans",
                            fontSize: 14,
                            color: "#151875",
                            textAlign: "left",
                          }}
                          onClick={() => readonly(product.id)}
                        >
                          Read More <span style={{ color: "red" }}>*</span>
                        </Typography>
                        {read && open === product.id && (
                          <Typography>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                          </Typography>
                        )}
                      </div>
                    </Box>
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
