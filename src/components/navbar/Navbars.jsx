import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonAppBar from "./headers";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import "../../App.css";
import { useState } from "react";

const pages = [
  { name: "Home", slug: "/" },
  // { name: "Page", slug: "/page" },
  { name: "Products", slug: "/product" },
  { name: "Blog", slug: "/blog" },
  { name: "Shop", slug: "/shop" },
  { name: "Contact", slug: "/contact" },
];

export default function NavBars() {
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

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    border: "2px solid #E7E6EF",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    background: "deeppink",
    height: "42px",
    width: "50px",
    position: "relative",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
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
      [theme.breakpoints.up("md")]: {
        width: "auto",
      },
    },
  }));
  return (
    <>
      <ButtonAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#FFFFFF",
            // justifyContent: {
            //   md: "space-evenly",
            //   sm: "space-evenly",
            //   xl: "space-evenly",
            //   xs: "space-between",
            // },
            alignItems: {
              md: "center",
              sm: "center",
              xl: "center",
              xs: "flex-end",
            },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              aria-label="menu"
              style={{
                backgroundColor: isHovering ? "#673ab7" : "",
                color: isHovering ? "white" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                bgcolor: "#673ab7",
                display: { xs: "flex", md: "none", sm: "none", xl: "none" },
              }}
            >
              <MenuIcon style={{ background: "#673ab7" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              style={{ padding: 0 }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none", sm: "none" },
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
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h6"
              href="/"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Josefin Sans",
                fontWeight: 700,
                fontSize: "34px",
                letterSpacing: ".2rem",
                color: "#0D0E43",
                textDecoration: "none",
              }}
            >
              Hekto
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", sm: "flex" },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  // onClick={handleCloseNavMenu}
                  sx={{ mr: 1, color: "black", display: "block" }}
                >
                  <Link to={`${page.slug}`} style={{ textDecoration: "none" }}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: "30px" }} />
              </SearchIconWrapper>
            </Search>
            {/* <Search
              sx={{
                display: { xs: "none", md: "flex", sm: "flex" },
                flexDirection: "colum",
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
            </Search> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
