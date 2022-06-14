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
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import HeaderBar from "./Header";
import { Link } from "react-router-dom";
import ButtonAppBar from "./headers";

const pages = [
  { name: "Home", slug: "/" },
  // { name: "Page", slug: "/page" },
  { name: "Products", slug: "/product" },
  { name: "Blog", slug: "/blog" },
  { name: "Shop", slug: "/shop" },
  { name: "Contact", slug: "/contact" },
];

const NavBar = () => {
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
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "15ch",
        },
      },
    },
  }));

  return (
    <>
      {/* <HeaderBar /> */}
      <ButtonAppBar />
      <AppBar position="relative" sx={{ bgcolor: "#FFFFFF" }}>
        <ButtonAppBar />
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 20,
                ml: 20,
                display: { xs: "none", md: "flex" },
                fontFamily: "Josefin Sans",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "0D0E43",
                textDecoration: "none",
              }}
            >
              HEKTO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                // color="inherit"
                sx={{ bgcolor: "#673ab7" }}
              >
                <MenuIcon />
              </IconButton> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClick={handleOpenNavMenu}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={`${page.slug}`}
                      style={{ textDecoration: "none", textAlign: "center" }}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  <Link to={`${page.slug}`} style={{ textDecoration: "none" }}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>

            <Search
              sx={{
                display: { xs: "flex", md: "flex" },
                flexDirection: "row",
              }}
            >
              <StyledInputBase
                placeholder="Search…"
                style={{ border: "1px solid black", width: "auto" }}
                inputProps={{ "aria-label": "search" }}
              />
              <Container
                style={{
                  height: "42px",
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "deeppink",
                }}
              >
                <SearchIcon />
              </Container>
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
