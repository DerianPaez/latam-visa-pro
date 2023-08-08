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
        <Toolbar disableGutters>
          <Link href="/">
            <Box
              component="img"
              src="/icons/logo-mobile.svg"
              alt="Logo LATAMVISAPRO"
              sx={{
                flexGrow: 0,
                display: { xs: "flex", sm: "none" },
              }}
            />
          </Link>
          <Link href="/">
            <Box
              component="img"
              src="/icons/logo.svg"
              alt="Logo LATAMVISAPRO"
              sx={{
                flexGrow: 0,
                display: { xs: "none", sm: "flex" },
              }}
            />
          </Link>

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
                    scroll={!route.includes("/#")}
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
              marginRight: { lg: "20px" },
            }}
          >
            {headerLinks.map(({ key, label, route }) => (
              <Link
                key={key}
                href={route}
                scroll={!route.startsWith("/#")}
                style={{ textDecoration: "none", color: "#3C3B6E" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    minWidth: "initial",
                    fontSize: "16px",
                    padding: "6px 12px",
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="action"
              sx={{ borderRadius: "8px" }}
              href="https://api.whatsapp.com/send/?phone=593939513372"
              target="_blank"
            >
              whatsapp
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const headerLinks = [
  {
    key: "inicio",
    label: "Inicio",
    route: "/",
  },
  {
    key: "visas",
    label: "Visas",
    route: "/#visas",
  },
  {
    key: "nosotros",
    label: "Nosotros",
    route: "/#nosotros",
  },
  {
    key: "servicios",
    label: "Servicios",
    route: "/#servicios",
  },
  {
    key: "faq",
    label: "FAQ",
    route: "/#faq",
  },
  {
    key: "contacto",
    label: "Contácto",
    route: "/#contacto",
  },
];
