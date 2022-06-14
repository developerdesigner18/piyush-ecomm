import { Typography, Grid, Paper, Container, TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { accessories } from "../../data";
import CircleIcon from "@mui/icons-material/Circle";
import { bag } from "../../data";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Cart } from "../../context/cartContext";

import { newsletter } from "../../data";
import Sidebar from "./Sidebar";
const Page = () => {
  //const product = accessories;
  const { cart, setCart } = useContext(Cart);
  const [product, setProduct] = React.useState(accessories);

  const [sort, setSort] = React.useState();
  const [displaylist, setDisplaylist] = React.useState(false);

  const gridDisplay = () => {
    setDisplaylist(false);
  };

  const listDisplay = () => {
    setDisplaylist(true);
  };

  let navigate = useNavigate();
  const productinfoHandler = (product, index) => {
    navigate("/productdetail", { state: { index: index, product: product } });
  };

  const handleChange = (event) => {
    setSort(event.target.value);

    const filterproduct = accessories.filter(
      (product) => product.category === event.target.value
    );
    setProduct(filterproduct);
    console.log(filterproduct);
    console.log(event.target.value);
  };

  const addtocartHandler = (product, index, e) => {
    e.stopPropagation();

    setCart([...cart, product]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "center",
          width: "96%",
          alignItems: "center",
        }}
      >
        <div>
          <Typography
            variant="h3"
            sx={{
              color: "#1A0B5B",
              fontFamily: "Josefin Sans",
              fontSize: "22px",
            }}
          >
            Ecommerce Accessories & Fashion Item
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div style={{ display: "flex" }}>
            <Typography>Per Page:</Typography>
            <input
              style={{
                height: "20px",
                width: "55px",
                justifyContent: "center",
              }}
              type="number"
            />
          </div> */}
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Sort By:</Typography>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                onChange={handleChange}
                sx={{ width: "96px", height: "28px" }}
              >
                <MenuItem value="earphone">Earphone</MenuItem>
                <MenuItem value="bag">bag</MenuItem>
                <MenuItem value="watch">watch</MenuItem>
                <MenuItem value="sofa">sofa</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <Typography>View:</Typography>
              <GridViewIcon onClick={gridDisplay} />
              <ListIcon onClick={listDisplay} />
            </div>
            <div>
              <TextField
                type="text"
                border-radius="50px"
                sx={{
                  width: { xs: "auto", sm: "auto", md: "auto" },
                  height: { xs: "auto", sm: "auto", md: "auto" },
                  marginLeft: "20px",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: `${displaylist ? "flex" : "block"}`,
          //   flexDirection: "column",

          justifyContent: "space-evenly",
          //   textDecoration: "none",
        }}
      >
        {displaylist && (
          <div>
            <Sidebar />
          </div>
        )}

        <div>
          <Container>
            <Grid
              container
              xs={12}
              item
              spacing={1}
              sx={{
                display: { md: `${displaylist ? "block" : "flex"}` },
                flexDirection: "row",
                // justifyContent: "space-evenly",
                textDecoration: "none",
              }}
            >
              {product.map((product, index) => {
                return (
                  <Box
                    onClick={(e) => productinfoHandler(product, index, e)}
                    key={index}
                    sx={{
                      width: `${displaylist ? "500px" : "270px"}`,
                      bgcolor: "#FFFFFF",
                    }}
                    margin="10px"
                  >
                    <Grid container>
                      <Grid
                        item
                        sm={`${displaylist ? 12 : 3}`}
                        md={`${displaylist ? 12 : 3}`}
                        xs={6}
                        sx={{
                          display: { md: `${displaylist ? "flex" : "block"}` },
                        }}
                      >
                        <Box
                          height="280px"
                          justifyContent="center"
                          alignItems="center"
                          margin="auto"
                        >
                          <FavoriteBorderIcon
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                          />
                          <ShoppingCartIcon
                            onClick={(e) => addtocartHandler(product, index, e)}
                            sx={{ display: { xs: "none", md: "flex" } }}
                          />
                          <img
                            src={product.img}
                            alt="logo"
                            height={`${displaylist ? "217px" : "201px"}`}
                            width={`${displaylist ? "313px" : "201px"}`}
                          />
                        </Box>
                        <Box
                          sx={{ width: `${displaylist ? "270px" : "270px"}` }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "#151875",
                              fontWeight: 700,
                              fontSize: 18,
                              color: "#151875",
                            }}
                          >
                            {product.title}
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
                              alignItems: "center",

                              justifyContent: "center",
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
                              {product.newprice}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Josefin Sans",
                                fontSize: 14,
                                textDecoration: "line-through",
                                color: "#FB2448",
                              }}
                            >
                              {product.Price}
                            </Typography>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Grid>
          </Container>
        </div>
      </div>

      <Box
        style={{
          margin: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={newsletter.img2} height="50px" width="auto" />
      </Box>
    </>
  );
};

export default Page;
