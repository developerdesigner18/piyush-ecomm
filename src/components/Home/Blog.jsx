import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { blog } from "../../data";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Blog = () => {
  const blogdata = blog;
  console.log(blogdata);
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
    const blogs = [...blogdata];
    blogs.map((blog) => {
      if (blog.id === id) {
        setRead((prev) => !prev);
        setOpen(blog.id);
      }
    });
  };
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
      <div
        style={{
          width: "96%",
          margin: "2%",
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
            display: { md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {blogdata.map((product, index) => {
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
                  <Grid item md={3} xs={12} sm={3} lg={3}>
                    <img
                      src={product.img}
                      alt="logo"
                      width="275px"
                      height="250px"
                    />
                    <Paper
                      sx={{
                        width: { xs: "100%", sm: "275px" },
                        mb: { xs: "10px", sm: 30, md: 30 },
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          margin: "5px",
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
                          }}
                        >
                          {date + "  " + month + "," + year}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontWeight: 700,
                          fontSize: 18,
                          color: "#111C85",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#72718F",
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
                      <Typography
                        sx={{
                          fontFamily: "Josefin Sans",
                          fontSize: 14,
                          color: "#151875",
                          mt: "5px",
                        }}
                        onClick={() => readonly(product.id)}
                      >
                        Read More ...
                      </Typography>
                      {read && open === product.id && (
                        <Typography>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of
                        </Typography>
                      )}
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

export default Blog;
