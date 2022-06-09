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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "static",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    marginRight: 50,
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
      <ButtonAppBar />
      <Box sx={{ flexGrow: 3 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#FFFFFF",
            alignItems: { md: "center", sm: "center", xl: "center" },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleOpenNavMenu}
              aria-label="menu"
              sx={{
                mr: 2,
                bgcolor: "#673ab7",
                display: { xs: "flex", md: "none", sm: "none", xl: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
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
            <Search
              sx={{
                display: { xs: "flex", md: "flex", sm: "none" },
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
        </AppBar>
      </Box>
    </>
  );
}
