import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../context/cartContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const BasicTable = () => {
  const { cart, setCart } = React.useContext(Cart);
  console.log(cart);
  const productcart = cart ? cart : null;
  console.log(productcart);
  const [productinfo, setProductinfo] = useState(productcart);

  const [update, setUpdate] = useState(true);
  const [quantity, setQuantity] = useState([]);

  const cartTotal = {
    total: 0,
  };

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/ordercomplete");
  };

  const quantitychangeHandler = (id, e) => {
    let temp = [...quantity];
    temp.map((t) => {
      if (t.id == id) t.quantity = parseInt(e.target.value);
    });
    setQuantity(temp);
  };

  useEffect(() => {
    let temp = [];
    productinfo?.map((t) => {
      temp.push({ id: t.id, quantity: 1 });
    });
    setQuantity(temp);
  }, []);

  const clearcartHandler = () => {
    setProductinfo([]);
  };
  const updatecart = () => {
    setUpdate(false);
  };

  const productDeleteHandler = (index) => {
    const product = [...productinfo];
    product.splice(index, 1);
    setProductinfo(product);
  };
  return (
    <TableContainer
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Table
        sx={{ maxWidth: "650px", mb: "200px", mt: "20px", ml: "20px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                color: "#1D3178",
                fontFamily: "Josefin Sans",
                fontSize: "20px",
              }}
            >
              Product
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#1D3178",
                fontFamily: "Josefin Sans",
                fontSize: "20px",
              }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                color: "#1D3178",
                fontFamily: "Josefin Sans",
                fontSize: "20px",
              }}
            >
              Quantity
            </TableCell>
            <TableCell
              sx={{
                color: "#1D3178",
                fontFamily: "Josefin Sans",
                fontSize: "20px",
              }}
            >
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          {productinfo &&
            productinfo.map((product, index) => {
              cartTotal.total +=
                parseInt(product.Price) *
                quantity?.find((x) => x?.id === product?.id)?.quantity;
              return (
                <TableRow align="center" key={index} sx={{}}>
                  <TableCell component="th" scope="row">
                    {
                      <div>
                        <HighlightOffIcon
                          onClick={() => productDeleteHandler(index)}
                        />
                        <div
                          className="imageWithNameContainer"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                          }}
                        >
                          <div className="imageHolder">
                            <img
                              src={product.img}
                              alt="logo"
                              height="87px"
                              width="83px"
                            />
                          </div>
                          <div className="descriptionHolder">
                            <Box
                              sx={{
                                width: "auto",
                                textAlign: "left",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "Josefin Sans",
                                  fontSize: 14,
                                  color: "#000000",
                                }}
                              >
                                {product.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Josefin Sans",
                                  fontSize: 14,
                                  color: "#A1A8C1",
                                }}
                              >
                                Color:Brown
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Josefin Sans",
                                  fontSize: 14,
                                  color: "#A1A8C1",
                                }}
                              >
                                Size:Xl
                              </Typography>
                            </Box>
                          </div>
                        </div>
                      </div>
                    }
                  </TableCell>
                  <TableCell align="center">{product.Price}</TableCell>
                  <TableCell align="left">
                    {
                      <input
                        disabled={update}
                        type="number"
                        key={product.id}
                        onChange={(e) => quantitychangeHandler(product.id, e)}
                        value={
                          quantity?.find((x) => x?.id === product?.id)?.quantity
                        }
                        name={index}
                        style={{ width: "51px", height: "15px" }}
                      />
                    }
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Typography color="black" key={product.id}>
                      {parseInt(product.Price) *
                        quantity?.find((x) => x?.id === product?.id)?.quantity}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          {productinfo && !productinfo.length && (
            <>
              <Typography>Your cart is empty</Typography>
            </>
          )}
          {productinfo && productinfo.length >= 1 && (
            <>
              <TableRow
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  onClick={updatecart}
                  sx={{
                    bgcolor: "#FB2E86",
                    width: "134px",
                    height: "39px",
                    color: "white",
                    ml: "100px",
                  }}
                >
                  Update Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={clearcartHandler}
                  sx={{
                    bgcolor: "#FB2E86",
                    width: "134px",
                    height: "39px",
                    color: "white",
                    // alignItems: "flex-end",
                    // alignContent: "flex-end",
                  }}
                >
                  Clear Cart
                </Button>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
      <Table
        sx={{
          maxWidth: "20%",
          height: "284px",
          bgcolor: "#E8E6F1",
          marginRight: "100px",
          marginTop: "20px",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#1D3178",
                fontFamily: "Josefin Sans",
                fontSize: "20px",
              }}
              align="center"
            >
              Cart Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell
            sx={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "600px",
            }}
          >
            SubTotal
          </TableCell>
          <TableCell
            sx={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "600px",
            }}
          >
            {cartTotal.total}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "600px",
            }}
          >
            Totals:
          </TableCell>
          <TableCell
            sx={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "600px",
            }}
          >
            {cartTotal.total}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Shipping & taxes calculated at checkout</TableCell>
        </TableRow>
        <TableRow sx={{}}>
          <Button
            variant="contained"
            onClick={checkoutHandler}
            sx={{
              bgcolor: "#19D16F",
              width: "312px",
              height: "40px",
              color: "white",

              ml: "30px",
            }}
          >
            Proceed to Checkout
          </Button>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
