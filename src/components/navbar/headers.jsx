import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customStyle } from "./style";

import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

export default function ButtonAppBar() {
  const [dropdown, setDropdown] = React.useState({
    language: "English",
    currency: "Usd",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDropdown({
      ...dropdown,
      [name]: value,
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#673ab7",

          alignItems: { md: "center", sm: "center" },
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "space-between" },
              alignItems: { xs: "center" },
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <EmailIcon
                sx={{
                  display: {
                    xs: "flex",
                    md: "flex",
                    xl: "flex",
                    flexDirection: "row",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "1rem" },
                  mr: { sm: "5px" },
                }}
              >
                {" "}
                mhhansaul@gmail.com
              </Typography>
            </div>

            <PhoneInTalkIcon
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
                mr: "5px",
              }}
            />
            <Typography
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
                mr: { md: "100px", xl: "200px" },
                ml: "5px",
              }}
            >
              0(12345)6789
            </Typography>

            <FormControl variant="standard" sx={customStyle.iconstyle}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={dropdown.language}
                onChange={handleChange}
                sx={{ color: "white" }}
                name="language"
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={customStyle.iconstyle}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={dropdown.currency}
                onChange={handleChange}
                name="currency"
                sx={{ color: "white" }}
              >
                <MenuItem value="Usd">Usd</MenuItem>
                <MenuItem value="Rupee">Rupee</MenuItem>
              </Select>
            </FormControl>
            <Typography
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
              }}
            >
              {" "}
              Wishlist
            </Typography>
            <FavoriteBorderIcon sx={customStyle.iconstyle} />
            <ShoppingCartIcon sx={customStyle.iconstyle} />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                style={{
                  fontFamily: "roboto",
                  border: "none",
                  fontSize: "20px",
                  backgroundColor: "#673ab7",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",

                    color: "white",
                  }}
                >
                  Login
                </Link>
              </button>
              <PersonIcon
                sx={{
                  display: { xs: "flex", md: "flex" },
                  alignItems: { xs: "flex-end", md: "flex-end", xl: "flex" },
                }}
              />
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
