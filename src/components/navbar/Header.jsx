import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./style.css";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    <AppBar position="static" sx={{ bgcolor: "#673ab7" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "160px",
              marginRight: "2px",
            }}
            className="email"
          >
            <EmailIcon
              sx={{ display: { xs: "flex", md: "flex", flexDirection: "row" } }}
            />
            <Typography
              fontSize="16px"
              noWrap
              component="a"
              sx={{
                display: { xs: "flex", md: "flex" },
                fontFamily: "Josefin Sans",
                fontWeight: 10,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              mhhansaul@gmail.com
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PhoneInTalkIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              fontSize="16px"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontFamily: "Josefin Sans",
                fontWeight: 16,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              0(12345)6789
            </Typography>
          </div>

          <Box
            sx={{
              ml: 48,
              display: {
                xs: "none",
                md: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
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
            <FormControl variant="standard" sx={{ m: 2, minWidth: 80 }}>
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

            {/* <Typography
              fontSize="16px"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 0,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "Josefin Sans",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Login
            </Typography>
            <PersonIcon sx={{ mr: 2, display: { xs: "flex", md: "flex" } }} /> */}
            <Typography
              fontSize="16px"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 0,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontFamily: "Josefin Sans",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Wishlist
            </Typography>
            <FavoriteBorderIcon
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            />
            <ShoppingCartIcon sx={{ display: { xs: "none", md: "flex" } }} />
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "50px",
              marginLeft: "5px",
            }}
            className="login"
          >
            <Link
              to="/login"
              fontSize="16px"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 0,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "Josefin Sans",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Login
            </Link>

            <PersonIcon sx={{ display: { xs: "flex", md: "flex" } }} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderBar;
