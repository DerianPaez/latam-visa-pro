import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // <Container sx={{ padding: "25px 0" }}>
    <AppBar
      position="fixed"
      color="white"
      sx={{
        width: { xs: "85%", sm: "88%" },
        maxWidth: "1200px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        top: 0,
        left: 0,
        right: 0,
        margin: "25px auto",
        borderRadius: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: { lg: "20px" } }}>
          <Box
            component="img"
            src="/icons/logo-mobile.svg"
            alt="Logo LATAMVISAPRO"
            sx={{
              flexGrow: 0,
              display: { xs: "flex", sm: "none" },
            }}
          />
          <Box
            component="img"
            src="/icons/logo.svg"
            alt="Logo LATAMVISAPRO"
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "flex" },
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
                display: { xs: "block", lg: "none" },
              }}
            >
              {headerLinks.map(({ key, label, route }) => (
                <MenuItem
                  key={key}
                  onClick={handleCloseNavMenu}
                  sx={{ padding: 0, color: "primary" }}
                >
                  <Link
                    href={route}
                    style={{
                      padding: "6px 16px",
                      width: "100%",
                      textDecoration: "none",
                      color: "#3C3B6E",
                    }}
                  >
                    <Typography>{label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "end",
              textAlign: "right",
            }}
          >
            {headerLinks.map(({ key, label, route }) => (
              <Button
                key={key}
                href={route}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  minWidth: "initial",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="accent"
              sx={{ borderRadius: "8px" }}
            >
              whatsapp
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </Container>
  );
}

const headerLinks = [
  {
    key: "inicio",
    label: "Inicio",
    route: "/",
  },
  {
    key: "servicios",
    label: "Servicios",
    route: "#servicios",
  },
  {
    key: "visas",
    label: "Visas",
    route: "#visas",
  },
  {
    key: "nosotros",
    label: "Nosotros",
    route: "#nosotros",
  },
  {
    key: "faq",
    label: "FAQ",
    route: "#faq",
  },
  {
    key: "contacto",
    label: "Contácto",
    route: "#contacto",
  },
];
