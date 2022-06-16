import { accessories } from "../../data";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import BasicRating from "../productDetails/rating";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Listview = (prop) => {
  return (
    <>
      <div
        style={{
          width: "96%",
          margin: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {prop.products.map((product, index) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.img}
                  style={{ width: 200, height: 200, marginRight: 20 }}
                />
                <Card style={{ marginBottom: 20 }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111C85",
                          fontWeight: "bold",
                          fontFamily: "Josefin Sans",
                          fontSize: "20px",
                          marginRight: "50px",
                          textAlign: "justify",
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
                    </div>
                    <div
                      style={{
                        display: "flex",
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
                      <BasicRating />
                    </div>
                    <Typography>{product.detail}</Typography>
                    <div style={{ display: "flex" }}>
                      <FavoriteBorderIcon sx={{ mr: 1 }} />
                      <ShoppingCartIcon
                        // onClick={(e) => addtocartHandler(product, index, e)}
                        sx={{ mr: 1 }}
                      />
                      <ZoomInIcon />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Listview;
